import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';
import ModalSelector from "react-native-modal-selector";
import { FlatList } from "react-native-gesture-handler";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const GuardianCom = require("../component/Guardian").default;
const ChildInfoCom = require("../component/ChildInfo").default;
const NetWorking = require("../networking/Networking").default

const Indicator = require("../../../../common/component/Indicator").default

const options = {
  title: global.localization.getLang("lang_select_image"),
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  noData: false,
  maxWidth: 128,
  maxHeight: 128,
  quality: 1,
};

const updateGuardian = (props)=>{
  props.dispatch({type: "GET_INFO_GUARDIAN"})
  NetWorking.apiGetGuardiansInfo(props, (response)=>{
    var guardians = JSON.parse(response)
    guardians = global.guardianData.getParseData(guardians)
    props.dispatch({type: "SET_GUARDIANS", guardians: guardians})
  }, ()=>{
    props.dispatch({type: "RESULT_GET_INFO_STUDENT"})
  })
}

class ChildTab extends Component{
    render(){
        return (
          <View style={[styles.container]}>
            <View style={styles.coverContainer}>
              <Image
                style={styles.parentCover}
                source={require('../../../../../res/image/Account/school.jpg')}
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

                        this.props.dispatch({
                          type: 'SET_STUDENT_AVATAR',
                          avatar: source,
                        });
                      }
                    });
                  }}>
                  <Image
                    style={styles.parentAvatar}
                    source={
                      this.props.studentList[this.props.curStudent].routes.Pickup.avatar
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.otherInfoContainer}>
                <ModalSelector
                  style={styles.parentNameContainer}
                  selectStyle={styles.childNameContent}
                  initValueTextStyle={styles.childName}
                  cancelText={global.localization.getLang(
                    'lang_confirm_cancel',
                  )}
                  data={this.props.studentList.map((item, index) => {
                    return {
                      label: item.studentName,
                      key: index,
                    };
                  })}
                  initValue={
                    this.props.studentList[this.props.curStudent]
                      .studentName
                  }
                  onChange={option => {

                    this.props.dispatch({
                      type: 'SELECT_CHILD',
                      curStudent: option.key,
                    });
                  }}
                />
                <View style={styles.guardiansContainer}>
                  <View style={styles.guardiansHeaderContainer}>
                    <View
                      style={[
                        styles.childHeaderContainer,
                        this.props.childWatchMode == TAB_GUARDIANS
                          ? styles.activeChildTab
                          : {},
                      ]}>
                      <TouchableOpacity
                        style={[commonStyles.fullViewVerticalCenter, styles.btnChildHeader]}
                        onPress={() => {
                          this.props.dispatch({
                            type: 'SWITCH_CHILD_TAB_MODE',
                            childWatchMode: TAB_GUARDIANS,
                          });
                        }}>
                        <Text
                          style={[
                            commonStyles.text,
                            commonStyles.textBold,
                            styles.lblHeaderGuardiansList,
                            this.props.childWatchMode != TAB_GUARDIANS
                              ? styles.inactiveWatchMode
                              : styles.activeWatchMode,
                          ]}>
                          {global.localization.getLang(
                            'lang_guardians_list',
                          )}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={[
                        styles.childHeaderContainer,
                        this.props.childWatchMode == TAB_CHILD_INFO
                          ? styles.activeChildTab
                          : {},
                      ]}>
                      <TouchableOpacity
                        style={[commonStyles.fullViewVerticalCenter, styles.btnChildHeader]}
                        onPress={() => {
                          this.props.dispatch({
                            type: 'SWITCH_CHILD_TAB_MODE',
                            childWatchMode: TAB_CHILD_INFO,
                          });
                        }}>
                        <Text
                          style={[
                            commonStyles.text,
                            commonStyles.textBold,
                            styles.lblHeaderGuardiansList,
                            this.props.childWatchMode != TAB_CHILD_INFO
                              ? styles.inactiveWatchMode
                              : styles.activeWatchMode,
                          ]}>
                          {global.localization.getLang(
                            'lang_child_info',
                          )}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {this.props.childWatchMode == TAB_GUARDIANS ? (
                    <GuardianCom/>
                  ) : (
                     <ChildInfoCom /> 
                  )}
                </View>
              </View>
            </View>
            {this.props.loadingStudentInfomation ? <Indicator/> : null}
          </View>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab,
        studentList: state.studentList,
        curStudent: state.curStudent,
        guardians: state.guardians,
        childWatchMode: state.childWatchMode,
        studentInfomation: state.studentInfomation,
    }
}

export default connect(mapStateToProps)(ChildTab);

const TAB_GUARDIANS = "0";
const TAB_CHILD_INFO = "1";