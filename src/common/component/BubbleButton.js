import React, {Component} from "react"
import {TouchableOpacity, Image, View} from "react-native"

import EStyleSheet from "react-native-extended-stylesheet"

var createButton = function(btnType, callback){
    switch (btnType){
        case BTN_TYPE.CLOSE:
            var source = require("../../../res/image/popup/close.png")
        default:
            var source = require("../../../res/image/popup/close.png")
    }
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}
                onPress={()=>{
                    if (typeof callback == 'function')
                        callback()
                }}
            >
                <Image source={source} resizeMethod={"auto"} style={{width: "60%", height: "60%"}}/>
            </TouchableOpacity>
        </View>
    )
}

export default createButton

const styles = EStyleSheet.create({
    btnContainer: {
        width: "20rem",
        height: "20rem",
        right: "12rem",
        bottom: "30rem",
        position: "absolute",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20rem"
    },
    btn: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})

const BTN_TYPE = {
    CLOSE: "CLOSE"
}
exports.BTN_TYPE = BTN_TYPE