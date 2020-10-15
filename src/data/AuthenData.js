import asyncStore, {StorageKey} from "../storage/asyncStore";

var AuthenData = {
    setPhoneNumber: async function(phoneNumber, callback){
        this.phoneNumber = phoneNumber;
        await asyncStore.storeData(StorageKey.PHONE_NUMBER, phoneNumber.toString());
        if (typeof callback == 'function')
            callback();
    },
    getPhoneNumber: function(){
        return this.phoneNumber || DEFAULT.PHONE_NUMNER;
    },
    setPassword: async function(password, callback){
        this.password = password;
        await asyncStore.storeData(StorageKey.PASSWORD, password.toString());
        if (typeof callback == 'function')
            callback();
    },
    getPassword: function(){
        return this.password || DEFAULT.PASS_WORD;
    },
    setToken: function(token){
        this.token = token;
    },
    getToken: function(){
        return this.token || DEFAULT.TOKEN;
    },
    initial: async function(){
        var phoneNumber = await asyncStore.getData(StorageKey.PHONE_NUMBER);
        this.phoneNumber = phoneNumber ? phoneNumber : DEFAULT.PHONE_NUMNER;
        var password = await asyncStore.getData(StorageKey.PASSWORD);
        this.password = password ? password : DEFAULT.PASS_WORD;
    }
}

export default AuthenData;

const DEFAULT = {
    PHONE_NUMNER: "",
    PASS_WORD: "",
    TOKEN: ""
}