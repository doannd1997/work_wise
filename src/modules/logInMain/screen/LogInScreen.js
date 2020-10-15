import React, {Component, useState} from "react";
import { Provider } from "react-redux";

const Main = require("./Main").default;
const store = require("../redux/Redux").default;

export default class LogInScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                <Main {...this.props}></Main> 
            </Provider>
        )
    }
}