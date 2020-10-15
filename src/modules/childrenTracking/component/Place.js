import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class DefaultInfo extends Component {
  render(){
    return (
      <View style={styles.divInfoInside}>
        <View style={styles.iconOtherContainer}>
          <Image source={require("../../../../res/image/StudenTracking/location.png")} style={styles.iconOther}/>
        </View>
        <View style={styles.txtInfoContainer}>
          <Text style={[styles.textDivInfoCommon]}
          ellipsizeMode="tail">
              {getPlace(this.props)}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    var student = state.studentList[state.curStudent]
    return {
      curStudent: state.curStudent,
      studentList: state.studentList,
      routeType: state.routeType,
      student: student
    }
}

export default connect(mapStateToProps)(DefaultInfo);

const getPlace = (props)=>{
  return props.student.homeAddress
}