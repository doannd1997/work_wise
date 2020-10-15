import {netWorkRequestSinglePost, networkRequestPost, createUrl} from "../../../network/NetWork"
import {QuickToast} from "../../../../utils/Toast";
const TimeUtils = require("../../../../utils/Times").default

export default Networking = {
    apiRequestGetMessages: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.GET_ALL_MESSAGE)

        var userId = global.accountData.getId()
        var appType = global.userData.getAppType()

        var params = PARAM.GET_ALL_MESSAGE
        .replace(/@AppType@/gi, appType)
        .replace(/@UserId@/gi, userId)

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
    apiReadMail: (messageId, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.READ_MAIL)

        var params = PARAM.READ_MAIL
        .replace(/@MessageId@/gi, messageId)

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
    apiDeleteMail: (messageId, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.DELETE_MAIL)

        var params = PARAM.DELETE_MAIL
        .replace(/@MessageId@/gi, messageId)

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
    apiSendToSchool: (message, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.SEND_TO_SCHOOL)

        var parentId = global.accountData.getId()

        var params = new FormData()
        params.append("0", parentId)
        params.append("1", message)

        token = global.authenData.getToken()
        netWorkRequestSinglePost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof sucessCallback == 'function')
                sucessCallback(responseText);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    GET_ALL_MESSAGE: "api/values/GetMessageInOut",
    READ_MAIL: "api/values/UpdateMessageReadStatus",
    DELETE_MAIL: "api/values/DeleteMessage",
    SEND_TO_SCHOOL: "api/values/Parent2School"
}

const PARAM = {
    GET_ALL_MESSAGE: "AppType=@AppType@&UserId=@UserId@",
    READ_MAIL: "MessageID=@MessageId@",
    DELETE_MAIL: "MessageID=@MessageId@",
    SEND_TO_SCHOOL: ""
}
