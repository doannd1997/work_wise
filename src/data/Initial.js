import { call } from "react-native-reanimated";

const userData = require("./UserData").default;
const localize = require("../localization/localize").default;
const fcmClient = require("../firebase/Firebase").default;
const authenData = require("../data/AuthenData").default;
const deviceInfo = require("./DeviceInfo").default

const AccountData = require("./Account").default;
const RouteData = require("./Route").default;
const RegisterData = require("./RegisterData").default
const GuardianData = require("./GuardianData").default
const MailData = require("./MailData").default
const HistoryData = require('./HistoryData').default
const NotificationData = require('./Notification').default
const Scheduler = require("./Scheduler").default

const Cacher = require("./Cacher");

const DELAY = 100; //ms loading -> main screen

export default initial = {
    initAll: async function(callback){
        global.userData = userData;
        await userData.loadAllData();
        global.localization = localize;
        await global.localization.initConfigLang();
        global.authenData = authenData;
        await authenData.initial();
        global.deviceInfo = deviceInfo
        await deviceInfo.init()

        global.cacher = Cacher
        global.accountData = AccountData
        global.routeData = RouteData
        global.registerData = RegisterData
        global.guardianData = GuardianData
        global.mailData = MailData
        global.historyData = HistoryData

        global.firebase = fcmClient
        global.notificationPusher = NotificationData
        global.scheduler = Scheduler

        if (typeof callback == "function")
            setTimeout(callback, DELAY)
    }
}

