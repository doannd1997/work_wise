import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

import { StoreConst } from "../redux/Redux";

class DefaultInfo extends Component {
  render(){
    return (
      <View style={styles.divInfoInside}>
        <View style={styles.iconOtherContainer}>
          <Image source={require("../../../../res/image/StudenTracking/flag.png")} style={styles.iconOther}/>
        </View>
        <View style={styles.txtInfoContainer}>
          <Text style={[styles.textDivInfoCommon]}>
            {this.props.studentList[this.props.curStudent].routes[this.props.routeType].status + " - " + getRouteType(this.props.routeType)}
          </Text>
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      curStudent: state.curStudent,
      studentList: state.studentList,
      routeType: state.routeType
    }
}

export default connect(mapStateToProps)(DefaultInfo);

const getRouteType = (routeType)=>{
  switch (routeType){
    case StoreConst.PICK_UP:
      return global.localization.getLang("lang_pick_type_UP")
    case StoreConst.DELIVERY:
      return global.localization.getLang("lang_pick_type_DOWN")
  }
}