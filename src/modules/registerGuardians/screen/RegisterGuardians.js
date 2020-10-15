import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const MainCom = require("./Main").default;
const store = require("../redux/Redux").default;

export default class RegisterGuardians extends Component{
    componentWillMount(){
      var guardians = global.guardianData.getGuardianList()
      store.dispatch({type: "SET_GUARDIANS", guardians: guardians})
    }
    render(){
        return (
          <Provider store = {store}>
            <MainCom/>
            <View/>
          </Provider>
          
        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

const commonStyle = require("../../../common/style/index").default;