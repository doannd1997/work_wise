import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import ImageCarousel from 'react-native-image-carousel';

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

export default function ImageSlider (props){
    imgData = props.imgsSrc
    return (
        <View style={[styles.imageContainer]}>
            <ImageCarousel style={[commonStyles.fullView]}
                renderContent={_renderContent}
            >
                {props.imgsSrc.map((url)=>urlToImage(url))}
            </ImageCarousel>
       
        </View>
    )
}