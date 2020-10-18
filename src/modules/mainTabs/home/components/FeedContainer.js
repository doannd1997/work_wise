import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;


var navigateToLogIn = (navigation)=>{
  navigation.navigate("MainLogin");
}
var navigationToMethod = (methodName, navigation, props)=>{
  switch (methodName){
    case METHOD_CHILDREN_TRAKCING:
      navigation.navigate("ChildrenTracking");
      break;
    case METHOD_REPORT_ABSENTEE:
      navigation.navigate("ReportAbsence");
      break;
    case METHOD_REGISTER_SERVICE:
      navigation.navigate("RegisterService");
      break;
    case METHOD_CHANGE_CANCEL_SERVICE:
      navigation.navigate("ChangeService");
      break;
    case METHOD_REGISTER_GUARDIAN:
      navigation.navigate("RegisterGuardians");
      break;
  }
}
var pressOnGrid = (props, methodName, navigation)=>{
    if (!props.logedIn) {
      var header = global.localization.getLang(
        'lang_noti_header',
      );
      var okLabel = global.localization.getLang(
        'lang_confirm_ok',
      );
      var cancelLabel = global.localization.getLang(
        'lang_confirm_cancel',
      );
      var content = global.localization.getLang(
        'lang_noti_login',
      );
      Alert.alert(
        header,
        content,
        [
          {
            text: okLabel,
            onPress: () => {navigateToLogIn(navigation)},
          },
          {
            text: cancelLabel,
            onPress: () => {
              
            },
          },
        ],
        {cancelable: true},
      );
    }
    else {
        navigationToMethod(methodName, navigation, props)
    }
    
}

const FeedContainer = props => {
    const navigation = useNavigation();
    return (
      <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>

      </View>
    );
};

const mapStateToProps = state => ({
  logedIn: state.logedIn
});

const METHOD_CHILDREN_TRAKCING = "METHOD_CHILDREN_TRAKCING"
const METHOD_REGISTER_SERVICE = "METHOD_REGISTER_SERVICE"
const METHOD_REPORT_ABSENTEE = "METHOD_REPORT_ABSENTEE"
const METHOD_REGISTER_GUARDIAN = "METHOD_REGISTER_GUARDIAN"
const METHOD_CHANGE_CANCEL_SERVICE = "METHOD_CHANGE_CANCEL_SERVICE"
const dataList = [
  {
    color: '#2ecc71',
    lang: 'lang_student_tracking',
    methodName: METHOD_CHILDREN_TRAKCING,
  },
  {
    color: '#3498db',
    lang: 'lang_report_absentee',
    methodName: METHOD_REPORT_ABSENTEE,
  },
  {
    color: '#9b59b6',
    lang: 'lang_register_service',
    methodName: METHOD_REGISTER_SERVICE,
  },
  {
    color: '#34495e',
    lang: 'lang_change_or_cancel_service',
    methodName: METHOD_CHANGE_CANCEL_SERVICE,
  },
  {
    color: '#16a085',
    lang: 'lang_register_guardian',
    methodName: METHOD_REGISTER_GUARDIAN,
  },
];

const TRACKING_IMG = require("../../../../../res/image/HomeScreen/grid_location_tracking.png");
const REPORT_ABSENCE_IMG = require("../../../../../res/image/HomeScreen/grid_report_absence.png");
const REGISTER_SERVICE_IMG = require("../../../../../res/image/HomeScreen/grid_register_service.png");
const CHANGE_SERVICE_IMG = require("../../../../../res/image/HomeScreen/grid_cancel_service.png");
const REGISTER_GUARDIAN_IMG = require("../../../../../res/image/HomeScreen/grid_register_guardian.png")


const getGridderSource = (methodName)=>{
  switch (methodName){
    case METHOD_CHILDREN_TRAKCING:
      return TRACKING_IMG;
    case METHOD_REPORT_ABSENTEE:
      return REPORT_ABSENCE_IMG;
    case METHOD_REGISTER_SERVICE:
      return REGISTER_SERVICE_IMG;
    case METHOD_CHANGE_CANCEL_SERVICE:
      return CHANGE_SERVICE_IMG;
    case METHOD_REGISTER_GUARDIAN:
      return REGISTER_GUARDIAN_IMG
  }
}

export default connect(mapStateToProps)(FeedContainer);