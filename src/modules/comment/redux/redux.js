import { NativeModules } from "react-native";
import {createStore} from "redux";

var defaultState = {
    followed: false
};

exports.ACTION_TYPE = ACTION_TYPE = {
    TOGGLE_FOLLOW: "SWITCH_FOLLOW"
}

const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
    state = defaultState;
  switch (action.type){
    case ACTION_TYPE.TOGGLE_FOLLOW:
        return {...state, followed: !state.followed}
    default:
      return state;
  }
}

exports.store = createStore(reducer, {});



const GUARDIAN_MAX = 4;