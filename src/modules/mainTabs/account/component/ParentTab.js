import React, {Component} from "react";
import {View, Text, Alert, Image, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';

import {QuickToast} from "../../../../utils/Toast";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

var options;

var getNavigation = ()=>{
  return useNavigation();
}
const ParentTab = (props)=>{
    options = {
      title: global.localization.getLang("lang_select_image"),
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: false,
      maxWidth: 128,
      maxHeight: 128,
      quality: 1,
    };
    var navigation = getNavigation();

    return (
      <View style={[styles.container]}>
        <View style={styles.coverContainer}>
          <Image
            style={styles.parentCover}
            source={require('../../../../../res/image/Account/beach.jpg')}
            resizeMethod="resize"
          />
        </View>
        <View style={styles.parentInfoContainer}>
          <View style={styles.parentAvatarContainer}>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.showImagePicker(options, response => {
                  if (response.didCancel) {
                    
                  } else if (response.error) {
                    
                  } else if (response.customButton) {
                    
                  } else {
                    var source;

                    if (Platform.OS === 'android') {
                      source = {
                        uri: response.uri,
                        isStatic: true,
                      };
                    } else {
                      source = {
                        uri: response.uri.replace('file://', ''),
                        isStatic: true,
                      };
                    }

                    props.dispatch({
                      type: 'SET_PARENT_AVATAR',
                      avatar: source,
                    });
                  }
                });
              }}>
              <Image
                style={styles.parentAvatar}
                source={props.parentAvatar}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.otherInfoContainer}>
            <View style={styles.parentNameContainer}>
              <Text style={styles.parentName}>
                {props.parentName}
              </Text>
            </View>
            <View style={styles.btnChangePasswordContainer}>
              <TouchableOpacity style={commonStyles.fullBtn}
                onPress={()=>{
                  // props.dispatch({type: "LOG_OUT"})
                  navigation.navigate("FogetPassword")
                }}
              >
                <Text
                  style={[
                    commonStyles.textBold,
                    commonStyles.text,
                    styles.txtLogOut,
                  ]}>
                  {global.localization.getLang('lang_change_password')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnLogOutContainer}>
              <TouchableOpacity style={commonStyles.fullBtn}
                onPress={()=>{
                  var header = global.localization.getLang("lang_noti_header");
                  var content = global.localization.getLang("lang_confirm_log_out");
                  var okLabel = global.localization.getLang(
                    'lang_confirm_ok',
                  );
                  var cancelLabel = global.localization.getLang(
                    'lang_confirm_cancel',
                  );
                  Alert.alert(
                    header,
                    content,
                    [
                      {
                        text: okLabel,
                        onPress: () => {
                          global.scheduler.stop()
                          props.dispatch({type: "LOG_OUT"})
                        },
                      },
                      {
                        text: cancelLabel,
                        onPress: () => {
                          // props.dispatch({type: "LOG_OUT"})
                        },
                      },
                    ],
                    {cancelable: true},
                  );
                }}
              >
                <Text
                  style={[
                    commonStyles.textBold,
                    commonStyles.text,
                    styles.txtLogOut,
                  ]}>
                  {global.localization.getLang('lang_log_out')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
};

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab,
        parentAvatar: state.parentAvatar,
        parentName: state.parentName
    }
}

export default connect(mapStateToProps)(ParentTab);