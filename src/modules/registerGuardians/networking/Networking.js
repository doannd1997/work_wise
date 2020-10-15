import {networkRequestPostMultipart, networkRequestPost, createUrl} from "../../network/NetWork"
import {QuickToast} from "../../../utils/Toast";
const TimeUtils = require("../../../utils/Times").default

export default Networking = {
    apiUpdateGuardian: (pGuardian, sucessCallback, failCallback)=>{

        var parentId = global.accountData.getId()
        var extras = {
            Name: pGuardian.name,
            Relationship: pGuardian.role,
            ID: pGuardian.id,
            ParentID: parentId,
            Phone: pGuardian.phoneNumber
        }        

        var url = createUrl(ROUTE.UPDATE_GUARDIAN, extras)

        var params = pGuardian.avatarSource
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
    apiDeleteGuardian: (pGuardian, sucessCallback, failCallback)=>{

        var parentId = global.accountData.getId()
        var extras = {
            SupervisorID: pGuardian.id,
            ParentID: parentId,
        }        

        var url = createUrl(ROUTE.DELETE_GUARDIAN, extras)
        var params = PARAM.DELETE_GUARDIAN

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
    apiCreateGuardian: (pGuardian, sucessCallback, failCallback)=>{

        var parentId = global.accountData.getId()
        var extras = {
            Name: pGuardian.name,
            Relationship: pGuardian.role,
            ID: -1,
            ParentID: parentId,
            Phone: pGuardian.phoneNumber
        }        

        var url = createUrl(ROUTE.UPDATE_GUARDIAN, extras)
        var params = ""

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
    UPDATE_GUARDIAN: "api/values/UpdateSupervisor",
    DELETE_GUARDIAN: "api/values/DeleteSupervisor"
}

const PARAM = {
    UPDATE_GUARDIAN: "",
    DELETE_GUARDIAN: ""
}


const BUS_TYPE = {
    PICK_UP: "Pickup",
    DROP_DOWN: "Delivery",
    BOTH: "Both"
  }


