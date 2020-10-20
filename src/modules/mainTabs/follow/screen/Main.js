import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../../../../common/component/Toolbar").default
const Store = require("../components/Store").default

class FollowCom extends Component{
    render(){
        return (
            <View style={commonStyles.fullViewVerticalTopDown}>
                <ToolBar params={{title: "lang_follow"}}/>
                <Store/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(FollowCom)