import asyncStore from "../storage/asyncStore";
import { NativeModules, Platform } from "react-native"

const asynStorage = require("../storage/asyncStore").default;

userData = {
    logedIn: false,
    userName: "null",
    displayName: "Developer",
    passWord: "123456",
    GOOGLE_API_KEY: "AIzaSyCcuUK8Q8drVszgClwhfIVMXImXazFVaGE",
    HERE_API_KEY: "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4",
    loadAllData: async function(){
        const deviceLanguage =
            Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings
                .AppleLocale ||
                NativeModules.SettingsManager.settings
                .AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

        var _deviceLanguage = deviceLanguage.split('_')[0];
        
        this.curLang = _deviceLanguage;
        
        this.accessToken = await asyncStore.getData(userData.KEY_ACCESS_TOKEN);
        this.userName = await asyncStore.getData(userData.KEY_USER_NAME);
        this.passWord = await asyncStore.getData(userData.KEY_PASS_WORD);
    },
    getCurLang: function(){
        return this.curLang || userData.DEFAULT_LANG;
    },

    isLogedIn: function(){
        return this.logedIn;
    },
    setLogedIn: function(boo){
        this.logedIn = boo;
    },
    getAccessToken: function(){
        return this.accessToken;
    },
    getUserName: function(){
        return this.userName;
    },
    getPassWord: function(){
        return this.passWord;
    },

    setCurLang: async function(lang){
        this.curLang = lang;
        asynStorage.storeData(userData.KEY_LANG, lang);
    },

    getChildName: function(){
        return "Kids";
    },
     
    isChildOnBus: function(){
        return false;
    },

    getBusCoordinate: function(busIndex){
        var listCoor = [
            {
                latitude:20.996669, 
                longitude: 105.842007
            },
            {
                latitude:20.997129, 
                longitude: 105.845494
            },
            {
                latitude:20.998341, 
                longitude: 105.839003
            },
        ]
        return listCoor[busIndex]
    },

    getAppType: function(){
        return APP_TYPE
    }
}

userData.DEFAULT_LANG = "vi";

userData.KEY_LANG = "KEY_LANG";
userData.KEY_ACCESS_TOKEN = "KEY_ACCESS_TOKEN";
userData.KEY_USER_NAME = "KEY_USER_NAME";
userData.KEY_PASS_WORD = "PASS_WORD";

export default userData;

const APP_TYPE = "Parent"