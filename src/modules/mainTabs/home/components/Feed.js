import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default
const ImageContainer = require("./ImageSlider").default
const ContentText = require("./ContentText").default
const Interation = require("./Interation").default

import {QuickToast} from "../../../../utils/Toast"


export default function Feed (props){
    return (
        <View style={[styles.feed]}>
            <TouchableOpacity 
                style={[styles.ownerContainer]}
                onPress={()=>{
                    QuickToast.show(props.ownerName)
                }}
            >
                <View style={[styles.avatarContainer]}>
                    <Image style={[styles.ownerAvatar]}
                        source={require("../../../../../res/image/HomeScreen/user.png")}
                        resizeMethod={'resize'}
                    />
                </View>
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
            </TouchableOpacity>
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