import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    apiRequestInfo: (props, resultCallback)=>{
        var url = createUrl(ROUTE.CONFIRM_LOG_IN)

        var email = props.email;
        var phoneNumber = props.phoneNumber;
        var studentId = props.phoneNumber;

        var params = PARAM.CONFIRM_LOG_IN
        .replace(/@phone@/gi, phoneNumber)
        .replace(/@email@/gi, email)
        .replace(/@studentID@/, studentId);
        

        // for test
        resultCallback()
        return
        
        networkRequestPost(url, params, async (responseText)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            props.navigation.navigate("MainLogin");
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentGetLogInInfo",
    CONFIRM_LOG_IN: "api/values/ConfirmLoginInfo"
}

const PARAM = {
    LOG_IN: "phoneNumber=@phone_number@&email=@email@&studentId=@studentId@",
    CONFIRM_LOG_IN: "phone=@phone@&email=@email@&studentID=@studentID@"
}