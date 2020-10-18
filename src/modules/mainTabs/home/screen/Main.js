import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const FeedContainer = require("../components/FeedContainer").default;
const _ToolBar = require("../../../../common/component/Toolbar").default
// const _ToolBar = require("../components/ToolBar").default

class HomeScreenCom extends Component{
    render(){
        return (
            <View style={commonStyles.fullViewVerticalTopDown}>
                <_ToolBar params={{title: "lang_feed"}}/>
                <FeedContainer/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(HomeScreenCom)