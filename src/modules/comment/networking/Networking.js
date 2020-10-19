import {networkRequestGet, networkRequestPost, createUrl} from "../../../network/NetWork";
import {QuickToast} from "../../../../utils/Toast";

export default Networking = {
    aipGetStudentInfo: (data, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.UPDATE_TRACKING)

        var params = PARAM.UPDATE_TRACKING.replace(/@student_id@/gi, data.studentId)
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
    apiGetGuardiansInfo: (props, resultCallback, failCallback)=>{
        var parentId = global.accountData.getId()
        var extra = {
            ParentId: parentId
        }
        var url = createUrl(ROUTE.GET_GUARDIANS, extra)
        var params = PARAM.GET_GUARDIANS
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback(responseText);
            var json = JSON.parse(responseText)
            global.guardianData.setData(json)
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    },
    apiupdateStudentGuardians: (studentId, guardiansId)=>{
        var extra = {
            ID: studentId,
            SupIDs: guardiansId.join(',')
        }
        var url = createUrl(ROUTE.UPDATE_STUDENT_GUARDIAN, extra)
        var params = PARAM.UPDATE_STUDENT_GUARDIAN
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback(responseText);
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    }
};

const ROUTE = {
    UPDATE_TRACKING: "api/values/GetStudentRouteInformation",
    GET_GUARDIANS: "api/values/GetListSupervisorbyParent",
    UPDATE_STUDENT_GUARDIAN: "api/values/UpdateStudentInfo"
}

const PARAM = {
    UPDATE_TRACKING: "studentid=@student_id@",
    GET_GUARDIANS: "",
    UPDATE_STUDENT_GUARDIAN: ""
}