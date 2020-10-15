import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from "react-native-extended-stylesheet";
import CheckBox from 'react-native-check-box'
import DateTimePicker from "@react-native-community/datetimepicker";

const commonStyles = require("../../../common/style/index").default;
const styless = require("../style/styles").default;
const colors = require("../../../common/style/index").default;
import {QuickToast} from "../../../utils/Toast";

const TimeUtils = require("../../../utils/Times").default;

import {PICK_TYPE_METHOD} from "../redux/Redux"
import Networking from "../networking/Networking";

var OptionContainer = (props)=>{
  var pickUpOption = props.student.pickUpOption
  var checked = pickUpOption == props.arg
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={{flex: 1, padding: 3, justifyContent: "center", alignItems: "center"}}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_PICK_TYPE_METHOD',
          });
        }}
        isChecked={checked}
        checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styless.imgCheckBox}/>}
        unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styless.imgCheckBox}/>}
      />
      <Text style={styless.labelMethodItem}>{getOptionStr(props.arg)}</Text>
    </View>
  );
}

const getOptionStr = (pickType)=>{
  switch (pickType){
    case PICK_TYPE_METHOD.WITH_PARENT:
      return global.localization.getLang("lang_pick_method_with_parent")
    case PICK_TYPE_METHOD.ONLY_STUDENT:
      return global.localization.getLang("lang_pick_method_by_student")
  }
}

var PartnerContainer = (props)=>{
  var partner = props.partner;
  var partnerId = partner.studentId;

  var _checked = props.student.activePartners.filter((item=>{
    return item == partnerId
  })).length != 0
  
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={{flex: 1, padding: 3, justifyContent: "center", alignItems: "center"}}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_SELECT_PARTER',
            partnerId: partnerId
          });
        }}
        isChecked={_checked}
        checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styless.imgCheckBox}/>}
        unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styless.imgCheckBox}/>}
      />
      <Text style={styless.labelMethodItem}>{partner.studentName}</Text>
    </View>
  );
}

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

class PageReg1 extends Component {
  changeHome() {
    this.props.dispatch({type: 'TOGGLE_PICKING', changeType: CHANGE_TYPE.HOME});
  }
  changePlace() {
    this.props.dispatch({
      type: 'TOGGLE_PICKING',
      changeType: CHANGE_TYPE.PLACE,
    });
  }
  changeServiceStartTime(event, date){
    this.props.dispatch({type: "HIDE_PICKING_SERVICE_DATE_START"})
    if (event.type == "set"){
      var timeStamp = event.nativeEvent.timestamp;
      if (timeStamp < this.props.serviceStartTime){
        QuickToast.show(global.localization.getLang("lang_alert_register_select_date")
        .replace(/@date@/, TimeUtils.formatDate(this.props.serviceStartTime)))          
      }
      else {
        this.props.dispatch({type: "CHANGE_SERVICE_DATE_START", time: timeStamp})
      }
    }
  }
  componentWillUpdate(nextProps){
    if (nextProps.curStudent != this.props.curStudent){
      Networking.apiGetAvaiableDate(nextProps, (responseText)=>{
        var json = JSON.parse(responseText)
        this.props.dispatch({type: "CHANGE_SERVICE_DATE_START",
        time: TimeUtils.yy_mm_dd_toTimeStamp(json.effectiveDate)})
      },
      ()=>{
  
      })
    }
  }
  componentWillMount(){
    Networking.apiGetAvaiableDate(this.props, (responseText)=>{
      var json = JSON.parse(responseText)
      this.props.dispatch({type: "CHANGE_SERVICE_DATE_START",
      time: TimeUtils.yy_mm_dd_toTimeStamp(json.effectiveDate)})
    },
    ()=>{

    })
  }
  render() {
    var self = this;
    return (
      <View style={styles.page}>
        <View style={styles.pickUpMethodContainer}>
          <OptionContainer {...this.props} arg={PICK_TYPE_METHOD.WITH_PARENT} />
          <OptionContainer {...this.props} arg={PICK_TYPE_METHOD.ONLY_STUDENT} />
        </View>
        <View style={styles.partnerHeaderContainer}>
          <Text style={styless.lblHeaderPartner}>
            {global.localization.getLang('lang_partner_list')} 
            <Text style={{color: "#fff"}}>
              &nbsp;
            ({
              this.props.partners.filter((partner)=>partner.checked).length
            }/{
              this.props.partners.length
            })
            </Text>
          </Text>
        </View>
        <View style={styles.partnerContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={true}
            data={self.props.partners}
            renderItem={data => {
              return (
                <PartnerContainer {...self.props} partner={data.item} />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
        <View style={styles.timeStartContainer}>
          <Text style={styless.lblStartDateService}>
            {global.localization.getLang('lang_service_start_date')}
          </Text>
          <View style={styles.btnTimeContainer}>
            <TouchableOpacity
              style={styles.btnSelectTime}
              onPress={() => {
                var header = global.localization.getLang("lang_noti_header");
                var content = global.localization.getLang("lang_alert_register_select_date")
                .replace(/@date@/, TimeUtils.formatDate(this.props.serviceStartTime))
                var okLabel = global.localization.getLang(
                  'lang_select',
                );
                Alert.alert(
                  header,
                  content,
                  [
                    {
                      text: okLabel,
                      onPress: () => {
                        self.props.dispatch({
                          type: 'SHOW_PICKING_SERVICE_DATE_START',
                        });
                      },
                    },
                  ],
                  {cancelable: true},
                );
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
              style={commonStyles.formBtnConfirm}
              onPress={()=>{
                self.props.toNextPage();
              }}>
              <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                {global.localization.getLang('lang_next')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.props.isPickingDateStart ? (
          <DateTimePicker
            style={commonStyles.dateTimePicker}
            timeZoneOffsetInMinutes={0}
            value={new Date(this.props.serviceStartTime)}
            mode={'date'}
            is24Hour={true}
            display="calendar"
            onChange={this.changeServiceStartTime.bind(this)}
          />
        ) : null}
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
    partners: student.partners,
    student: student
  }
}

export default connect(mapStateToProps)(PageReg1)

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
  partnerHeaderContainer: {
    flex: 0.5,
    justifyContent: "center",
    paddingLeft: "17rem",
    alignItems: "flex-start"
  },  
  partnerContainer: {
    flex: 1.5,
    // backgroundColor: "cyan"
  },
  timeStartContainer: {
    flex: 0.5,
    marginLeft: 30,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnContainer: {
    flex: 0.81,
    width: "100%",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  singleBtnContainer: {
    height: "100%",
    // width: 40,
    flex: 1,
    backgroundColor: "red"
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
})