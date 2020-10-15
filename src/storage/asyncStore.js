import {AsyncStorage} from "react-native";

const ASYNC_STORAGE = {
    LOG_INFO_SET_GET: false,          //  display in console data store and get
    PHONE_NUMBER: "PHONE_NUMBER",
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD"
}

export default asyncStore = {
    storeData: async function(paramKey, paramData, successCallback, failCallback){
        let key = paramKey;
        let data = paramData;
        try {
            await AsyncStorage.setItem(key, data);
            if (typeof successCallback == 'funciton')
                successCallback();
            if (ASYNC_STORAGE.LOG_INFO_SET_GET)
                console.log("store data success: " + key);
            return true;
        }
        catch (e){
            if (ASYNC_STORAGE.LOG_INFO_SET_GET)
                console.log("set data to storage failed: " + key);
            if (typeof failCallback == 'function')
                failCallback();
            return false;
        }
        
        
    },

    getData: async function(key, successCallback, failCallback){
        try {
            let value = await AsyncStorage.getItem(key);
            if (value != null){
                if (typeof successCallback == 'function')
                    successCallback(value);
                if (ASYNC_STORAGE.LOG_INFO_SET_GET)
                    console.log("get data success: " + key + " : " + value)
                return value;
            }
        }
        catch (e){
            if (typeof failCallback == 'function')
                failCallback(e);
        }
    }
}

exports.StorageKey = ASYNC_STORAGE;