import React, {Component} from 'react'
import {View, Image, Text} from 'react-native'

const commonStyles = require("../style/index").default

export default class Marker extends Component{
    render(){
        return (
            <View style={commonStyles.marker}>
                <Image 
                    source={require("../../../res/image/control/marker_128_aaa.png")}
                    style={commonStyles.fullViewVerticalCenter}
                />
            </View>
        )
    }
}