import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from "react-redux";

const commonStyles = require("../style/index").default;
const colors = require("../../color/Colors").default;

const ToolBar = function(props){
    var navagation = useNavigation();
    console.log("#")
    console.log(props)
    return (
      <LinearGradient
        style={[commonStyles.toolBar]}
        colors={[colors.toolBar, colors.toolBar]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <View style={[commonStyles.fullViewVerticalCenter]}>
          <Text style={[commonStyles.toolBarTitle]}>
            {global.localization.getLang(props.params.title)}
          </Text>
          {props.params.exitable === true ?
            <TouchableOpacity style={commonStyles.toolBarBtnBack}
              onPress={()=>{
                  navagation.navigate(props.params.navigation)
              }}
            >
              <Image
                style={[commonStyles.fullBtn]}
                source={require('../../../res/image/control/close_128_333.png')}
                resizeMethod={"scale"}
              />
            </TouchableOpacity>
            : null  
        }
          
        </View>
      </LinearGradient>
    );
}

const mapStateToProps = (state) => {
    return {}
  };
  
export default connect(mapStateToProps)(ToolBar);

