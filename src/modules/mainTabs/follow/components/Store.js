import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default
import { useRoute, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const UserHeader = require("../../../../common/component/UserHeader").default

export default function Feed (props){
    navigation = useNavigation()
    return (
        <View style={[commonStyles.contentContainer]}>
            <FlatList
                style={[commonStyles.fullView]}
                showsVerticalScrollIndicator={false}
                bounces={true}
                data={dataList}
                renderItem={({item, index})=>{
                    return <UserHeader {...convertProps(item)}/>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const convertProps = (props)=>{
    return {
        ...props,
        extrasInfo: "Follower:" + props.follower + " Following:" + props.following,
        clickable: true,
        alone: true
    }
}

const dataList = [
    {
        ownerName: "Store 1",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 2",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 3",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 1",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 2",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 3",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 1",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 2",
        follower: "12K",
        following: "5K"
    },
    {
        ownerName: "Store 3",
        follower: "12K",
        following: "5K"
    }
]