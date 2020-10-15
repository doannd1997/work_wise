import {createStore}  from "redux";

var defaultState = {
    phoneNumber: "",
    password: "",
    loading: false,
};

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState;
    switch (action.type){
        case StoreDefine.TYPE_PHONE_NUMBER:
            return {...state, phoneNumber: action.phoneNumber};
        case StoreDefine.TYPE_PASSWORD:
            return {...state, password: action.password};
        case StoreDefine.PRESS_LOG_IN:
            return {...state, loading: true};
        case StoreDefine.LOG_IN_RESULT:
            return {...state, loading: false};
    }
    return state;
};

export default createStore(reducer, {});

const StoreDefine = {
    TYPE_PHONE_NUMBER: "TYPE_PHONE_NUMBER",
    TYPE_PASSWORD: "TYPE_PASSWORD",
    PRESS_LOG_IN: "PRESS_LOG_IN",
    LOG_IN_RESULT: "LOG_IN_RESULT"
};

exports.StoreDefine = StoreDefine;