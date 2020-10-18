import React, {Component} from "react";
import {View, Text, TextInput, FlatList, Alert, Linking} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import {withNavigation} from "react-navigation"

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const {StoreDefine} = require("../redux/Redux");
const ToolBar = require("../../../common/component/Toolbar").default;
const Indicator = require("../../../common/component/Indicator").default;
const Marker = require("../../../common/component/Marker").default

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const Validator = require("../../../utils/Validator").default;
const Networking = require("../networking/Networking").default;


const startLogInCallback = (props)=>{
  props.dispatch({type: StoreDefine.PRESS_LOG_IN});
}

const loginResultCallback = (props)=>{
  props.dispatch({type: StoreDefine.LOG_IN_RESULT});
}

class MainLogInCom extends Component{
    componentWillMount(){
      // var param = this.props.route.params;
      // var phoneNumber = param != undefined ? param.phoneNumber : "";
      // var password = param != undefined ? param.password : "";
      // this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: phoneNumber});
      // this.props.dispatch({type: StoreDefine.TYPE_PASSWORD, password: password});
      this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: global.authenData.getPhoneNumber()});
      this.props.dispatch({type: StoreDefine.TYPE_PASSWORD, password: global.authenData.getPassword()});
    }
    render(){
        var self = this;
        return (
          <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
            <ToolBar params={{exitable: true, navigation: "HomeScreen", title: "lang_login"}}/>
            <View style={[commonStyles.fullViewVerticalCenter]}>
              <View 
                style={commonStyles.formContainer}
              >
                <Marker/>
                <TextInput
                  style={[styles.element, styles.input]}
                  onChangeText={(text)=>{
                    this.props.dispatch({
                      type: StoreDefine.TYPE_PHONE_NUMBER,
                      phoneNumber: text
                    })
                  }}
                  placeholder={global.localization.getLang("lang_account")}
                />
                <TextInput
                  style={[styles.element, styles.input]}
                  onChangeText={(text)=>{
                    this.props.dispatch({
                      type: StoreDefine.TYPE_PASSWORD,
                      password: text
                    })
                  }}
                  placeholder={global.localization.getLang("lang_password")}
                  secureTextEntry={true}
                />
                <View style={styles.padder}/>
                <TouchableOpacity
                  style={[styles.element, styles.button]}
                  onPress={() => {
                    var params = [this.props.phoneNumber, this.props.password];
                    Validator.validateLength(params, ()=>{
                      startLogInCallback(this.props);
                      Networking.apiLogIn(this.props, ()=>{
                        loginResultCallback(this.props)
                      });
                    })
                  }}>
                  <Text
                    style={[
                      commonStyles.text,
                      commonStyles.textBold,
                      styles.text,
                    ]}>
                    {global.localization.getLang('lang_login').toUpperCase()}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.element, styles.button]}
                  onPress={() => {
                    Linking.openURL("http://comicv.xyz/register")
                  }}>
                  <Text
                    style={[
                      commonStyles.text,
                      commonStyles.textBold,
                      styles.text,
                    ]}>
                    {global.localization.getLang('lang_register').toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
    phoneNumber: state.phoneNumber,
    password: state.password,
    loading: state.loading
  }
}

export default withNavigation(connect(mapStateToProps)(MainLogInCom));