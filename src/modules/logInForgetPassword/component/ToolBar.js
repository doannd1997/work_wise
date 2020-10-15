import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons"
import { connect } from "react-redux";

const commonStyles = require("../../../common/style").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

export default ToolBar = props=>{
    var navigation = useNavigation();
    return (
      <LinearGradient
        style={[commonStyles.toolBar]}
        colors={[colors.headerBar, colors.headerBar]}
        // start={[0, 0.65]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <TouchableOpacity
          style={commonStyles.toolBarBtnHome}
          onPress={() => {
            navigation.goBack()
          }}>
          <Icon name="keyboard-return" size={28} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.infoDiv}>
          <Text
            style={[
              commonStyles.toolBarTitle
            ]}>
            {global.localization.getLang("lang_change_password")}
          </Text>
        </View>
        <Text style={[commonStyles.toolBarBtnHome]}/>
      </LinearGradient>
    );
}


