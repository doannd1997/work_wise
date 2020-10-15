import React, {Component, useState} from "react";
import { Provider } from "react-redux";

const Main = require("./Main").default;
const store = require("../redux/Redux").default;

export default class LogInScreen extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        var routeBatch = global.routeData.getTrackingBatch()
        store.dispatch({type: "SET_STUDENT_INFO", studentList: routeBatch})
    }
    render(){
        return (
            <Provider store = {store}>
                <Main {...this.props}></Main> 
            </Provider>
        )
    }
}