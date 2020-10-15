import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ToolBar = require("../component/ToolBar").default;
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const {StoreDefine} = require("../redux/Redux");

const Validator = require("../../../utils/Validator").default;

class Main extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      // var param = this.props.route.params;
      var phoneNumber = global.authenData.getPhoneNumber();
      var password = "";
      this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: phoneNumber});
      this.props.dispatch({type: StoreDefine.TYPE_PASSWORD, newPassword: password});
      this.props.dispatch({type: StoreDefine.TYPE_CONFIRM_PASSWORD, confirmPassword: password});
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
              secureTextEntry={true}
              label={global.localization.getLang('lang_type_new_password')}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              value={this.props.newPassword}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_PASSWORD,
                  newPassword: text
                })
              }}
            />
            <Fumi
              style={styles.input}
              label={global.localization.getLang('lang_confirm_new_password')}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              value={this.props.confirmPassword}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_CONFIRM_PASSWORD,
                  confirmPassword: text
                })
              }}
            />
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                var params = [this.props.phoneNumber, this.props.newPassword, this.props.confirmPassword];
                Validator.validateLength(params, ()=>{
                  Validator.validateEqual([this.props.newPassword, this.props.confirmPassword], ()=>{
                    global.authenData.setPhoneNumber(this.props.phoneNumber)
                    self.props.navigation.navigate('MainLogin', {
                      // phoneNumber: this.props.phoneNumber,
                      // password: this.props.newPassword
                    });
                  })
                })
                
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_change_password')}
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
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
    phoneNumber: state.phoneNumber,
    newPassword: state.newPassword,
    confirmPassword: state.confirmPassword
  }
}

export default connect(mapStateToProps)(Main);