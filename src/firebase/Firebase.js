import { notifications, messages } from "react-native-firebase-push-notifications"
import asyncStore from "../storage/asyncStore";

const asyncStorage = require("../storage/asyncStore").default;
import {createUrl, networkRequestPost} from "../modules/network/NetWork"

getToken = async () => {
//get the messeging token
const token = await notifications.getToken()
//you can also call messages.getToken() (does the same thing)
return token
}
getInitialNotification = async () => {
//get the initial token (triggered when app opens from a closed state)
const notification = await notifications.getInitialNotification()
console.log("getInitialNotification", notification)
return notification
}

onNotificationOpenedListener = () => {
//remember to remove the listener on un mount
//this gets triggered when the application is in the background
this.removeOnNotificationOpened = notifications.onNotificationOpened(
    notification => {
    console.log("onNotificationOpened", notification)
    //do something with the notification
    }
)
}

onNotificationListener = () => {
//remember to remove the listener on un mount
//this gets triggered when the application is in the forground/runnning
//for android make sure you manifest is setup - else this wont work
//Android will not have any info set on the notification properties (title, subtitle, etc..), but _data will still contain information
this.removeOnNotification = notifications.onNotification(notification => {
    //do something with the notification
    console.log("onNotification", notification)
})
}

onTokenRefreshListener = () => {
//remember to remove the listener on un mount
//this gets triggered when a new token is generated for the user
this.removeonTokenRefresh = messages.onTokenRefresh(token => {
    //do something with the new token
})
}
setBadge = async number => {
//only works on iOS for now
return await notifications.setBadge(number)
}

getBadge = async () => {
//only works on iOS for now
return await notifications.getBadge()
}

hasPermission = async () => {
//only works on iOS
return await notifications.hasPermission()
//or     return await messages.hasPermission()
}

requestPermission = async () => {
//only works on iOS
return await notifications.requestPermission()
//or     return await messages.requestPermission()
}

    // componentWillUnmount() {
    //remove the listener on unmount
    // if (this.removeOnNotificationOpened) {
    //   this.removeOnNotificationOpened()
    // }
    // if (this.removeOnNotification) {
    //   this.removeOnNotification()
    // }
 
    // if (this.removeonTokenRefresh) {
    //   this.removeonTokenRefresh()
    // }
//   }


const ROUTE = {
    SEND_PUSH_TOKEN: "api/values/UpdatePushToken",
}

const PARAM = {
    SEND_PUSH_TOKEN: "UseID=@userId@&AppType=Parent&Token=@token@&DeviceID=@deviceId@",
}
const sendToken = async(pushToken)=>{
    var url = createUrl(ROUTE.SEND_PUSH_TOKEN)

    var parentId = global.accountData.getId()
    var deviceId = global.deviceInfo.getDevideId()

    var params = PARAM.SEND_PUSH_TOKEN
    .replace(/@userId@/gi, parentId)
    .replace(/@token@/gi, pushToken)
    .replace(/@deviceId@/gi, deviceId)

    console.log("push token")
    console.log(pushToken)
    const token = global.authenData.getToken()
    networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
        if (typeof resultCallback == 'function')
            resultCallback();
        console.log(">> send firebase token success\n" + responseText)
    }, async ()=>{
        if (typeof resultCallback == 'function')
            resultCallback();
        QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
    })

}

export default fcmClient = {
    start: async function(){
        // var token = await asyncStore.getData(FCM_TOKEN_KEY_STORE);
        // if (token == null){
        //     token = await getToken();
        //     await asyncStorage.storeData(FCM_TOKEN_KEY_STORE, token.toString());
        //     sendToken(token);
        // }
        // else {
        //     messages.onTokenRefresh(token => {
        //         sendToken(token)
        //     })
        // }

        var token = await getToken()
        await sendToken(token)
    }
}

const FCM_TOKEN_KEY_STORE = "FCM_TOKEN_KEY_STORE"