import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork"
import {QuickToast} from "../../../utils/Toast";
const TimeUtils = require("../../../utils/Times").default
const mapConf = require("../../../../res/map/Here.json")
var parseString = require('react-native-xml2js').parseString

export default Networking = {
    aipGetRegisterInfo: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.REGISTER_CUR_YEAR)

        var parentId = global.accountData.getId()
        var params = PARAM.REGISTER_CUR_YEAR.replace(/@parentId@/gi, parentId)
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            var json = JSON.parse(responseText)
            if (typeof sucessCallback == 'function')
                sucessCallback(json);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    },
    apiGetAvaiableDate: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.GET_AVAIABLE_DATE)

        var schoolLevel = props.student.schoolLevel
        var token = global.authenData.getToken()

        var params = PARAM.GET_AVAIABLE_DATE
        .replace(/@schoolLevel@/gi, schoolLevel)
        .replace(/@year@/gi, "CurrentYear")

        networkRequestPost(url, params, token, 
        async (responseText)=>{
            if (typeof sucessCallback == 'function')
                sucessCallback(responseText)
        },
        async ()=>{
            if (typeof failCallback == 'function')
                failCallback()
        })

    },
    apiSendRegisterService: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.REGISTER_SERVICE)

        var student = props.student
        var studentId = student.studentId
        var stopPointId = 0
        var stopPointAddress = ''
        var stopPointLat = 0
        var stopPointLong = 0
        var option = student.pickUpOption
        var partnersId = student.activePartners.join(',')
        var distanceFromHome = student.distanceToSchool
        var distanceFromStop = 0
        var date = TimeUtils.formatYYYY_MM_DD(new Date().getTime())
        var guardiansId = student.guardiandsId.join(',')
        var homeAddress = student.placeSelected.title
        var homeLat = student.placeSelected.latitude
        var homeLong = student.placeSelected.longitude

        var parentId = global.accountData.getId()
        var params = PARAM.REGISTER_SERVICE
        .replace(/@studentID@/gi, studentId)
        .replace(/@stopPointID@/gi, stopPointId)
        .replace(/@address@/gi, stopPointAddress)
        .replace(/@latitude@/gi, stopPointLat)
        .replace(/@longitude@/gi, stopPointLong)
        .replace(/@option@/gi, option)
        .replace(/@togetherids@/gi, partnersId)
        .replace(/@hometostop@/gi, distanceFromHome)
        .replace(/@stoptoschool@/gi, distanceFromHome)
        .replace(/@date@/gi, date)
        .replace(/@supervisorIDs@/gi, guardiansId)
        .replace(/@homeaddress@/gi, homeAddress)
        .replace(/@homelat@/gi, homeLat)
        .replace(/@homelong@/gi, homeLong)
        
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            var json = JSON.parse(responseText)
            if (typeof sucessCallback == 'function')
                sucessCallback(json);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    },
    apiConfirmRegister: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.CONFIRM_REGISTER)

        var studentId = props.student.studentId

        var params = PARAM.CONFIRM_REGISTER.replace(/@studentId@/gi, studentId)
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof sucessCallback == 'function')
                sucessCallback(responseText);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    },
    apiGetRouteDistance: (props, successCallback, failCallback)=>{
        var loc0 = props.placeSelected
        var loc1 = props.schoolLocation
        var _loc0 = loc0.latitude + "," + loc0.longitude
        var _loc1 = loc1.latitude + "," + loc1.longitude
        var url = ROUTE.DISTANCE
        .replace(/@apiKey@/gi, mapConf.API_KEY)
        .replace(/@loc0@/gi, _loc0)
        .replace(/@loc1@/gi, _loc1)

        var http = new XMLHttpRequest();
        http.open("GET", url);

        networkRequestGet(url, "", null, 
        (response)=>{
            parseString(response, (err, result)=>{
                var distance = result["rtcr:CalculateRoute"]["Response"][0]["Route"][0]["Summary"][0]["Distance"][0]
                props.dispatch({type: "SET_DISTANCE_TO_SCHOOL", distanceToSchool: parseFloat(distance)/1000})
            })
        },
        ()=>{
            
        })
    },
    apiUnregister: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.UN_REGISTER)

        var studentId = props.student.studentId
        var date = TimeUtils.formatYYYY_MM_DD(new Date().getTime())

        var params = PARAM.UN_REGISTER
        .replace(/@studentId@/gi, studentId)
        .replace(/@checkedDate@/gi, date)
        .replace(/@date@/gi, date)
        
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof sucessCallback == 'function')
                sucessCallback(responseText);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(responseText);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    REGISTER_CUR_YEAR: "api/values/GetRegister4CurrentYear",
    REGISTER_SERVICE: "api/values/RegisterStopPoint",
    CONFIRM_REGISTER: "api/values/ConfirmRegistration",
    GET_AVAIABLE_DATE: "api/values/GetAvailableDate",
    UN_REGISTER: "api/values/UnRegisterStopPoint",
    DISTANCE: "https://route.ls.hereapi.com/routing/7.2/calculateroute.xml?apiKey=@apiKey@&waypoint0=geo!@loc0@&waypoint1=geo!@loc1@&mode=fastest;car;traffic:disabled"
}

const PARAM = {
    REGISTER_CUR_YEAR: "parentId=@parentId@",
    REGISTER_SERVICE: "studentID=@studentID@&stopPointID=@stopPointID@&address=@address@&latitude=@latitude@&longitude=@longitude@&option=@option@&togetherids=@togetherids@&hometostop=@hometostop@&stoptoschool=@stoptoschool@&date=@date@&supervisorIDs=@supervisorIDs@&homeaddress=@homeaddress@&homelat=@homelat@&homelong=@homelong@",
    CONFIRM_REGISTER: "studentID=@studentId@",
    GET_AVAIABLE_DATE: "SchoolLevel=@schoolLevel@&Year=@year@",
    UN_REGISTER: "studentID=@studentId@&checkedDate=@checkedDate@&date=@date@"
}