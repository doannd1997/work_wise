import React, {Component} from "react";
import {View, Image, Text} from "react-native";
const commonStyle = require("../../../common/style").default;
const styles = require("../style/index").default;

const res = {
    image: require("../../../../res/image/LoadingScreen/bus.png"),
    parent: require("../../../../res/image/LoadingScreen/parent.png")
}



export default class LoadingScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.busContainer}>
                    <Image source={res.image} style={styles.imgageBus}/>
                </View>
                <View style={styles.parentContainer}>
                    <Image source={res.parent} style={styles.imageParent}/>
                </View>
            </View>
        )
    }
}