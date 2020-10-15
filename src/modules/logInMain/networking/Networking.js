import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

const RegisterNetWorking = require("../../registerService/networking/Networking").default

export default Networking = {
    apiLogIn: function(props, resultCallback){
        var url = createUrl(ROUTE.LOG_IN)

        const userName = props.phoneNumber;
        const password = props.password;
        var params = PARAM.LOG_IN.replace(/@user_name@/gi, userName).replace(/@pass_word@/gi, password);

        networkRequestPost(url, params, null, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            var json = JSON.parse(responseText)
            global.accountData.setAccount(json)
            global.routeData.setRoute(json.lstRoutes)

            global.authenData.setToken(getAccessToken(responseHeader))
            this.apiGetGuardiansInfo()
            this.apiGetStudentStatus()
            this.apiGetRegisterInfo()
            
            global.firebase.start()
            global.scheduler.start()
            
            props.navigation.navigate("HomeScreen", {logedIn: true})
            await global.authenData.setPhoneNumber(props.phoneNumber)
            await global.authenData.setPassword(props.password)
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    },
    apiGetGuardiansInfo: ()=>{
        var parentId = global.accountData.getId()
        var extra = {
            ParentId: parentId
        }
        var url = createUrl(ROUTE.GET_GUARDIANS, extra)
        var params = PARAM.GET_GUARDIANS
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            var json = JSON.parse(responseText)
            global.guardianData.setData(json)
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    },
    apiGetStudentStatus: function(){
        var parentId = global.accountData.getId()
        var extra = {
            
        }
        var url = createUrl(ROUTE.GET_STUDENT_STATUS, extra)
        var params = PARAM.GET_STUDENT_STATUS.replace(/@parentId@/gi, parentId)
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            var json = JSON.parse(responseText)
            global.routeData.mergeStudentStatus(json)
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    },
    apiGetRegisterInfo: function(){
        RegisterNetWorking.aipGetRegisterInfo({}, (json)=>{
            global.registerData.setData(json)
        }, ()=>{
            
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentAppLogin",
    GET_GUARDIANS: "api/values/GetListSupervisorbyParent",
    GET_STUDENT_STATUS: "api/values/GetStudentStatus"
}

const PARAM = {
    LOG_IN: "username=@user_name@&password=@pass_word@",
    GET_GUARDIANS: "",
    GET_STUDENT_STATUS: "ParentID=@parentId@",
    ACCESS_TOKEN: "Access_Token: "
}

const getAccessToken = (responseHeader)=>{
    var aIdx = responseHeader.search(PARAM.ACCESS_TOKEN);
    var tokenIdx = aIdx + PARAM.ACCESS_TOKEN.length;
    var token = responseHeader.slice(tokenIdx).split('\n')[0]

    return token;
}