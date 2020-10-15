import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/AntDesign"

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

export default TakeOffDetail = (props)=>{
    switch (props.data.action){
        case "UP":
            var source = UP_IMG;
            break;
        case "DOWN":
            var source = DOWN_IMG;
            break;
    }
    return (
      <View style={[styles.sectionListItem]}>
        <View style={[styles.itemActionType]}>
          <Image source={source} style={styles.imgUpDown} />
        </View>
        <LinearGradient
          style={[styles.itemTime]}
          colors={['#136a8a', '#136a8a']}
          start={{x: 0, y: 0.65}}
          end={{x: 1, y: 0}}>
          <Text style={styles.itemTimeText}>{props.data.time}</Text>
        </LinearGradient>
        <View style={styles.itemPlace}>
          <Text style={styles.txtPlace}>{props.data.place}</Text>
        </View>
      </View>
    );
};

const UP_IMG = require("../../../../../res/image/history/up.png");
const DOWN_IMG = require("../../../../../res/image/history/down.png");