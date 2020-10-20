import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

const commonStyles = require("../style/index").default
import { useRoute, useNavigation } from '@react-navigation/native';


export default function UserHeader(props){
    navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={[commonStyles.ownerContainer, props.alone === true? commonStyles.ownerContainerAlone : {}]}
            onPress={()=>{
                navigation.navigate("Profile", {_profile: props})
            }}
            disabled = {props.clickable === false}
        >
            <View style={[commonStyles.avatarContainer]}>
                <Image style={[commonStyles.ownerAvatar]}
                    source={require("../../../res/image/HomeScreen/user.png")}
                    resizeMethod={'resize'}
                />
            </View>
            <View style={[commonStyles.ownerNameContainer]}>
                <Text
                    style={[commonStyles.ownerNameTxt, props.alone === true ? commonStyles.text : {}]}
                >
                    {props.ownerName}
                </Text>
                <Text
                    style={[commonStyles.extrasInfo, props.alone === true ? commonStyles.text : {}]}
                >
                    {props.extrasInfo}
                </Text>
            </View>
        </TouchableOpacity>
    )
}