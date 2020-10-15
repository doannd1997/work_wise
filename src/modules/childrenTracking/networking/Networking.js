import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    apiUpdate: (props, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.UPDATE_TRACKING)

        const userName = global.authenData.getPhoneNumber();
        const password = global.authenData.getPassword();
        const token = global.authenData.getToken();
        var params = PARAM.UPDATE_TRACKING.replace(/@user_name@/gi, userName).replace(/@pass_word@/gi, password).replace(/@token@/gi, token);

        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            var json = JSON.parse(responseText)
            global.accountData.setAccount(json)
            global.routeData.setRoute(json.lstRoutes)
            if (typeof sucessCallback == 'function')
                sucessCallback();
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback();
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    UPDATE_TRACKING: "api/values/UpdateParentAppStatus"
}

const PARAM = {
    UPDATE_TRACKING: "username=@user_name@&password=@pass_word@&token=@token@"
}