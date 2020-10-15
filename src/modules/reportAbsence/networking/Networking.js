import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork"
import {QuickToast} from "../../../utils/Toast";
const TimeUtils = require("../../../utils/Times").default

export default Networking = {
    apiReportAbsence: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.REPORT_ABSENCE)

        var student = props.student
        var studentId = student.studentId
        var dateStart = TimeUtils.formatYYYY_MM_DD(props.startDate)
        var dateEnd = TimeUtils.formatYYYY_MM_DD(props.endDate)
        var routeType = props.busType

        var routeId = getRouteId(student, props.busType)
        var stopId = getStopId(student, props.busType)

        var params = PARAM.REPORT_ABSENCE
        .replace(/@StudentID@/gi, studentId)
        .replace(/@FromDate@/gi, dateStart)
        .replace(/@ToDate@/gi, dateEnd)
        .replace(/@RouteType@/gi, routeType)
        .replace(/@RouteID@/gi, routeId)
        .replace(/@StopID@/gi, stopId)

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
};

const ROUTE = {
    REPORT_ABSENCE: "api/values/SchoolOffNotice"
}

const PARAM = {
    REPORT_ABSENCE: "StudentID=@StudentID@&FromDate=@FromDate@&ToDate=@ToDate@&RouteType=@RouteType@&RouteID=@RouteID@&StopID=@StopID@"
}


const BUS_TYPE = {
    PICK_UP: "Pickup",
    DROP_DOWN: "Delivery",
    BOTH: "Both"
  }

const getRouteId = (student, busType)=>{
    switch (busType){
        case BUS_TYPE.DROP_DOWN:
            var route = student.routes[BUS_TYPE.DROP_DOWN]
        default:
            var route = student.routes[BUS_TYPE.PICK_UP]
    }
    return route.id
}

const getStopId = (student, busType)=>{
    switch (busType){
        case BUS_TYPE.DROP_DOWN:
            var route = student.routes[BUS_TYPE.DROP_DOWN]
        default:
            var route = student.routes[BUS_TYPE.PICK_UP]
    }
    return route.point.Id
}
