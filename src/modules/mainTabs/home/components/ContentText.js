import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import Toast from 'react-native-root-toast';

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default

var imgData = null

function urlToImage(url){
    return (
        <Image
            style={[styles.image]}
            source={{uri: url, height: 100}}
            resizeMode='cover'
        />
    )
}

function _renderContent(index){
    return (
        <Image style={commonStyles.fullView}
            source={{uri: imgData[index]}}
            resizeMode="contain"
        />
    )
}

export default function TextContent (props){
    const [_isExpanded, setExpanded] = useState(false);
    return (
            _isExpanded == false ?
                <TouchableOpacity 
                    style={[styles.contentTextContainer]}
                    onPress={()=>{
                        setExpanded(true)
                    }}
                >
                    <Text 
                        style={[styles.contentText]}
                        numberOfLines={4}
                        ellipsizeMode={'tail'}
                    >
                        {props.content}
                    </Text>
                </TouchableOpacity>
             : 
                <View 
                    style={[styles.contentTextContainer]}
                >
                    <Text 
                        style={[styles.contentText]}
                    >
                        {props.content}
                    </Text>
                </View>
    )
}