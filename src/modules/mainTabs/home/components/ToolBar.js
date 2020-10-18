import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, BackHandler} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient"
import { connect } from "react-redux";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../../color/Colors").default;

const _ToolBar = props=>{
    const route = useRoute();
    // if (route.params != undefined && route.params.logedIn === true)
    //   props.dispatch({type: "LOG_IN"})
    
    const navigation = useNavigation();
    return (
      <View style={commonStyles.toolBar}>
        <LinearGradient
          style={commonStyles.gradientToolBar}
          colors={[colors.headerBar, colors.headerBar]}
          // start={[0, 0.65]}
          start={{x: 0, y: 0.65}}
          end={{x: 1, y: 0}}>
          {!props.logedIn ? (
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                // props.dispatch({type: 'LOG_IN'});
                navigation.navigate('MainLogin');
              }}>
              <Text style={[commonStyles.textBold, commonStyles.text, styles.txtLogIn]}>
                {global.localization.getLang('lang_login')}
              </Text>
            </TouchableOpacity>
          ) : null}
          {props.logedIn ? (
            <View style={styles.toolBarUser}>
              <Image
                source={props.parentAvatar}
                style={styles.avatar}
              />
              <Text style={[commonStyles.text, styles.txtHeader]}>{props.parentName}</Text>
            </View>
          ) : null}
        </LinearGradient>
      </View>
    );
}

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
          <Image
            style={[
              commonStyles.fitHeight,
              {backgroundColor: "red" }
            ]}
            source={require('../../../../../res/image/HomeScreen/location_boy.png')}
            resizeMethod={"scale"}
          />
      </View>
    </LinearGradient>
  );
}

const mapStateToProps = state => ({
    logedIn: state.logedIn,
    parentName: state.parentName,
    parentAvatar: state.parentAvatar
  });
  
export default connect(mapStateToProps)(ToolBar);

