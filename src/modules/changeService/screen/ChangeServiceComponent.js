import React, {Component, useState} from "react";
import { Provider } from "react-redux";
import Networking from "../../mainTabs/account/networking/Networking";

const Main = require("./Main").default;
const store = require("../redux/Redux").default;

const NetWorking = require("../networking/Networking").default


const resultCallback = (props)=>{
    props.dispatch({type: "RESULT_DATA"})
}

export default class ChangeServiceComponent extends Component{
    constructor(props){
        super(props);
        // global.navigation = props.navigation
    }
    componentWillMount(){
        var studentList = global.routeData.getTrackingBatch()
        store.dispatch({type: "SET_STUDENT_LIST", studentList: studentList})
        store.dispatch({type: "REQUEST_DATA"})
        NetWorking.aipGetRegisterInfo({}, (json)=>{
            global.registerData.setData(json)
            studentList = global.registerData.getMergeStudent(studentList)
            var guardianList = global.guardianData.getGuardianList()
            store.dispatch({type: "SET_STUDENT_LIST", studentList: studentList, guardianList: guardianList})
            resultCallback(store)
        }, ()=>{
            
        })
    }
    render(){
        return (
            <Provider store = {store}>
                <Main {...this.props}></Main> 
            </Provider>
        )
    }
}