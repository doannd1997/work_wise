import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default

export default function Feed (props){
    console.log(props)
    return (
        <View style={[styles.feed]}>
            <View 
                style={[styles.ownerContainer]}
            >
                <TouchableOpacity style={[styles.avatarContainer]}>
                    <Image style={[styles.ownerAvatar]}
                        source={require("../../../../../res/image/HomeScreen/user.png")}
                        resizeMethod={'resize'}
                    />
                </TouchableOpacity>
                <View style={[styles.ownerNameContainer]}>
                    <Text
                        style={styles.ownerNameTxt}
                    >
                        {props.ownerName}
                    </Text>
                    <Text
                        style={styles.postedTimeTxt}
                    >
                        {props.postedTime}
                    </Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}