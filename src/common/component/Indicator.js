import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const commonStyles = require("../style/index").default;

import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';

class Indicator extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.indicatorContainer} onPress={()=>{}}>
                <BarIndicator color={"#54cbe3"} count={5}/>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    indicatorContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default Indicator