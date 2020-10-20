import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from "react-redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;
const UserHeader = require("../../../common/component/UserHeader").default

import {ACTION_TYPE} from "../redux/redux"

const Comment = props=>{
    return (
        <View style={[styles.commentContainer]}>
            <UserHeader {...convertProps(props)}/>
            <Text 
                style={[styles.commentText]}
                numberOfLines={props.expanded ? 1000 : 5}
                onPress={()=>{
                    props.dispatch({type: ACTION_TYPE.TOGGLE_EXPAND, index: props.index})
                }}
            >
                {props.content}
            </Text>
        </View>
    )
}

const mapStateToProps = (state)=>{
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Comment)


const convertProps = (props)=>{
    return {
        ...props,
        // alone: true,
        clickable: false,
        extrasInfo: props.postedTime
    }
}