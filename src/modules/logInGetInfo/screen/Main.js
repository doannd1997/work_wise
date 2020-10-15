import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import {withNavigation} from "react-navigation"

import {QuickToast} from "../../../utils/Toast"

const Indicator = require("../../../common/component/Indicator").default;

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ToolBar = require("../component/ToolBar").default;
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const {StoreDefine} = require("../redux/Redux");

const Validator = require("../../../utils/Validator").default;
const Networking = require("../networking/Networking").default;

const startApiCallback = (props)=>{
  props.dispatch({type: StoreDefine.PRESS_ON_REQUEST});
}

const resultApiCallback = (props)=>{
  props.dispatch({type: StoreDefine.RESPONSE_RESULT});
}

class Main extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      // var param = this.props.route.params;
      var phoneNumber = global.authenData.getPhoneNumber();
      var email = "";
      var studentId = "";
      this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: phoneNumber});
      this.props.dispatch({type: StoreDefine.TYPE_EMAIL, email: email});
      this.props.dispatch({type: StoreDefine.TYPE_STUDENT_ID, studentId: studentId});
    }
    render(){
        var self = this;
        return (
          <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
            <ToolBar style={commonStyles.toolBar} />
            <View style={[commonStyles.fullViewVerticalCenter, commonStyles.defaultColorBg]}>
            <Fumi
              style={styles.input}
              label={global.localization.getLang('lang_phone_number')}
              iconClass={FontAwesomeIcon}
              iconName={'user-circle'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              keyboardType='numeric'
              value={this.props.phoneNumber}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_PHONE_NUMBER,
                  phoneNumber: text
                })
              }}
            />
            <Fumi
              style={styles.input}
              // secureTextEntry={true}
              label={global.localization.getLang('lang_email_receive_password')}
              iconClass={FontAwesomeIcon}
              iconName={'inbox'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              value={this.props.email}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_EMAIL,
                  email: text
                })
              }}
            />
            <Fumi
              style={styles.input}
              label={global.localization.getLang('lang_student_code')}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              value={this.props.studentId}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_STUDENT_ID,
                  studentId: text
                })
              }}
            />
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                var params = [this.props.phoneNumber, this.props.email, this.props.studentId];
                Validator.validateLength(params, ()=>{
                  startApiCallback(self.props);
                  Networking.apiRequestInfo(self.props, ()=>{
                    resultApiCallback(self.props)
                    QuickToast.show(global.localization.getLang("lang_check_otp_and_mail"))
                    self.props.navigation.navigate('MainLogin', {
                  
                    })
                  })
                })
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_send_get_login_info')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                self.props.navigation.navigate('MainLogin', {
                  
                });
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_back_to_login')}
              </Text>
            </TouchableOpacity>
          </View>
          {this.props.loading ? <Indicator/> : null}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
    phoneNumber: state.phoneNumber,
    email: state.email,
    studentId: state.studentId,
    loading: state.loading
  }
}

export default withNavigation(connect(mapStateToProps)(Main));