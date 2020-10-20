import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default
const ImageContainer = require("./ImageSlider").default
const ContentText = require("./ContentText").default
const Interation = require("./Interation").default
const UserHeader = require("../../../../common/component/UserHeader").default
import { useRoute, useNavigation } from '@react-navigation/native';

import {QuickToast} from "../../../../utils/Toast"


export default function Feed (props){
    navigation = useNavigation()
    return (
        <View style={[commonStyles.contentContainer]}>
            <UserHeader {...convertProps(props)}/>
            {
                props.imageSrc.length > 0 ?
                <ImageContainer {... {imgsSrc: props.imageSrc}}>
                </ImageContainer>
                : null
            }
            <ContentText content={props.content}/>
            <Interation {...props}/>
        </View>
    )
}

const convertProps = (props)=>{
    return {
        ...props,
        extrasInfo: props.postedTime,
        clickable: true
    }
}