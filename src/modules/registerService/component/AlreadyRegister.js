import React, {Component} from "react"
import {Text, View} from "react-native"

const commonStyles = require("../../../common/style/index").default

export default class AlreadyResiterd extends Component{
    render(){
        return (
            <View style={[commonStyles.fullViewVerticalCenter]}>
                <Text style={commonStyles.text, commonStyles.textBold}>
                    {global.localization.getLang("already_registered")}
                </Text>
            </View>
        )
    }
}