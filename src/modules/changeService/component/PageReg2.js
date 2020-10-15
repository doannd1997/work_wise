import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from "react-native-extended-stylesheet";
import CheckBox from 'react-native-check-box'

import {withNavigation} from "react-navigation"

const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;
const styless = require("../style/styles").default;
import {QuickToast} from "../../../utils/Toast";

const Networking = require("../networking/Networking").default

const TimeUtils = require("../../../utils/Times").default;

const PICK_TYPE = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
};

const GUARDIAN_MAX = 4;

var GuardianContainer = (props)=>{
  var guardian = props.guardian;
  var guardianId = guardian.id;

  var _checked = props.studentList[props.curStudent].guardiandsId.indexOf(guardianId) != -1
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={{flex: 1, padding: 3, justifyContent: "center", alignItems: "center"}}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_SELECT_GUARDIAN',
            guardianId: guardianId
          });
        }}
        isChecked={_checked}
        checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styless.imgCheckBox}/>}
        unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styless.imgCheckBox}/>}
      />
      <Text style={styless.labelMethodItem}>{guardian.name}</Text>
    </View>
  );
}

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

const getNavigation = ()=>{
  var use
}

class PageReg2 extends Component {
  render() {
    var self = this;
    return (
      <View style={styles.page}>
        <View style={styles.guardianHeaderContainer}>
          <Text style={styless.lblHeaderGuardians}>
            {global.localization
              .getLang('lang_select_guardians_max')
              .replace('@max@', GUARDIAN_MAX)}
            <Text style={[styless.lblHeaderGuardians, {color: '#fff'}]}>
              &nbsp; (
              {
                self.props.studentList[self.props.curStudent].guardiandsId.length
              }
              /{GUARDIAN_MAX})
            </Text>
          </Text>
        </View>
        <View style={styles.guardiansContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={true}
            data={self.props.guardianList}
            renderItem={data => {
              return (
                <GuardianContainer {...self.props} guardian={data.item} />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
        <View style={styles.timeStartContainer}>
          <Text style={styless.lblStartDateService}>
            {global.localization.getLang('lang_select_date_remove_service')}
          </Text>
          <View style={styles.btnTimeContainer}>
            <TouchableOpacity
              style={styles.btnSelectTime}
              onPress={() => {
                self.props.dispatch({
                  type: 'SHOW_PICKING_SERVICE_DATE_START',
                });
              }}>
              <Text style={styless.lblBtnTimeStart}>
                {TimeUtils.formatDate(this.props.serviceStartTime)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnContainer}>
        <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnCancel}
              onPress={()=>{
                self.props.toPrevPage();
              }}>
              <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                {global.localization.getLang('lang_prev')}
              </Text>
            </TouchableOpacity>
          </View>
        
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnRemove}
              onPress={()=>{
                var header = global.localization.getLang("lang_confirm_remove_service_header");
                var content = global.localization.getLang("lang_confirm_remove_service_content")
                .replace(/@date@/gi, TimeUtils.formatDate(this.props.serviceStartTime))
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
                        Networking.apiUnregister(this.props, (response)=>{
                          QuickToast.show("Báo nghỉ thành công")
                        },
                        ()=>{

                        })
                      },
                    },
                    {
                      text: cancelLabel,
                      onPress: () => {
                        QuickToast.show("Canceled");
                      },
                    },
                  ],
                  {cancelable: true},
                );
              }}>
              <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                {global.localization.getLang('lang_remove_service')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnConfirm}
              onPress={() => {
                Networking.apiSendRegisterService(self.props, (json)=>{
                  var cost = json.BusFee

                  var header = global.localization.getLang("lang_confirm_change_service_header");
                  var content = global.localization.getLang("lang_confirm_change_service_content").replace("@value@", cost)
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
                          Networking.apiConfirmRegister(self.props, ()=>{
                            QuickToast.show(self.props.student.registerSuccessMgs);
                            self.props.navigation.navigate("HomeScreen")
                          })
                        },
                      },
                      {
                        text: cancelLabel,
                        onPress: () => {
                          QuickToast.show("Canceled");
                        },
                      },
                    ],
                    {cancelable: true},
                  );
                  })
              }}>
              <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                {global.localization.getLang('lang_change')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state)=>{
  var student = state.studentList[state.curStudent]
    return {
      pickTypeMethod: state.pickTypeMethod,
      serviceStartTime: state.serviceStartTime,
      isPickingDateStart: state.isPickingDateStart,
      curYear: state.curYear,
      guardianList: state.guardianList,
      policyAgree: state.policyAgree,
      studentList: state.studentList,
      curStudent: state.curStudent,
      student: student
    }
}

export default connect(mapStateToProps)(PageReg2)

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  pickUpMethodContainer: {
    flex: 1.5,
  },
  guardianHeaderContainer: {
    flex: 0.9,
    justifyContent: "center",
    paddingLeft: 20,
    alignItems: "flex-start"
  },  
  guardiansContainer: {
    flex: 6.5,
    // backgroundColor: "cyan",
    paddingBottom: 3
  },
  policycontainer: {
    flex: 1.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  policyCheckboxContainer: {
    alignItems: "flex-end",
    flex: 0.8,
    backgroundColor: "transparent"
  },
  policyBtnContainer: {
    flex: 2
  },
  btnContainer: {
    flex: 1.9,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  singleBtnContainer: {
    height: "100%",
    // width: 40,
    flex: 1,
  },
  optionContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  btnTimeContainer: {
    height: "100%",
    width: "50%",
    paddingRight: 5,
    justifyContent: "center"
  },
  btnSelectTime: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    borderRadius: 4,
  },
  timeStartContainer: {
    flex: 1,
    marginLeft: 30,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
})