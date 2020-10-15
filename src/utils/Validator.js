import { call } from "react-native-reanimated";

const QuickToast = require("./Toast").QuickToast;

const notiFunc = ()=>{
    QuickToast.show(global.localization.getLang("lang_noti_fill"));
}

export default Validator = {
    validateLength: (params, callback)=>{
        if (typeof params == "string"){
            if (params.length == 0){
                notiFunc();
                return;
            }
        }
        else 
            for (var s in params)
                if (params[s].length == 0) {
                    notiFunc();
                    return;
                }
        if (typeof callback == 'function')
            callback();
    },
    validateEqual: (params, callback)=>{
        for (var s=0; s<params.length-1; s++){
            var a = params[s].toString();
            var b = params[s+1].toString();
            if (a.localeCompare(b) != 0){
                notiFunc();
                return;
            }
        };
        if (typeof callback == 'function'){
            callback()
        }
    }
}