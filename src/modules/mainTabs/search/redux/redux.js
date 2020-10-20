import { NativeModules } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import {createStore} from "redux";

var defaultState = {
  searchText: ""
};

exports.ACTION_TYPE = ACTION_TYPE = {

}

const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
    state = defaultState;
  switch (action.type){
    default:
      return state;
  }
}

exports.store = createStore(reducer, {});

const GUARDIAN_MAX = 4;