import React, {Component, useState} from "react";
import {View, Text, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import {store, ACTION_TYPE} from "../redux/redux"

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;
const Main = require("./Main").default

class Comment extends Component{
    constructor(props){
        super(props)
        this.profile = props.route.params._profile
    }
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        let profile = this.props.route.params._profile
        return (
            <Provider store={store}>
                <Main {...this.props}/>
            </Provider>
        )
    }
};

export default (Comment);