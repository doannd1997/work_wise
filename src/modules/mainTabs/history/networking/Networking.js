import {networkRequestPostMultipart, networkRequestPost, createUrl} from "../../../network/NetWork"
import {QuickToast} from "../../../../utils/Toast";
const TimeUtils = require("../../../../utils/Times").default

export default Networking = {
    apiGetStudentHistories: (props, sucessCallback, failCallback)=>{

        var studentId = props.student.studentId
        var checkedDate = props.checkedDate || TimeUtils.formatYYYY_MM_DD(new Date().getTime())

        var url = createUrl(ROUTE.GET_HISTORY)
        var params = PARAM.GET_HISTORY
        .replace(/@studentId@/gi, studentId)
        .replace(/@checkedDate@/gi, checkedDate)

        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof sucessCallback == 'function')
                sucessCallback(responseText, studentId);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    },
};

const ROUTE = {
    GET_HISTORY: "api/values/GetStudentHistory",
}

const PARAM = {
    GET_HISTORY: "studentID=@studentId@&checkedDate=@checkedDate@",
}
