import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
import {QuickToast} from "../../../../utils/Toast";

import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker'
import Toast from "react-native-root-toast";
import ModalSelector from "react-native-modal-selector";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../../color/Colors").default;

const TimeUtils = require("../../../../utils/Times").default;

const getDateMap = (histories, date)=>{
  var dates = date.split('-');
  var date = dates[0];
  var month = dates[1];
  var year = dates[2];

  for (var h in histories){
    var history = histories[h];
    var d = new Date(history.date);
    var _date = d.getDate()
    var _month = d.getMonth()+1
    var _year = d.getFullYear();
    if (_date == date && _month == month && _year == year)
      return h;
  }
}

const ToolBar = props =>{
    return (
      <LinearGradient
        style={[commonStyles.toolBar, styles.toolBar]}
        colors={[colors.headerBar, colors.headerBar]}
        // start={[0, 0.65]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <View style={styles.infoDiv}>
        <ModalSelector
          style={styles.childNameContainer}
          selectStyle={styles.childNameContent}
          initValueTextStyle={styles.childName}
          cancelText={global.localization.getLang("lang_confirm_cancel")}
          data={props.studentList.map((item, index)=>{
            return {
              label: item.studentName,
              key: index
            }
          })}
          initValue={props.studentList[props.curStudent].studentName}
          onChange={(option)=>{
            // var newStudent = props.studentList[option.key]
            // var histories = global.historyData.getStudentHistories(newStudent)
            // props.dispatch({type: "SET_HISTORY", histories: histories})
            props.dispatch({type: 'SELECT_CHILD', curStudent: option.key})
          }} />
        </View>
        <View style={styles.btnPickDate}>
          <Image
            source={require('../..//../../../res/image/history/calendar.png')}
            style={styles.imgPick}
          />
          <Text
            style={[
              commonStyles.text,
              commonStyles.textBold,
              styles.txtSelect,
            ]}>
            {global.localization.getLang('lang_select')}
          </Text>
          <DatePicker
            showIcon={false}
            hideText={true}
            date={TimeUtils.formatTime(new Date().getTime())}
            mode="date"
            // placeholder="select date"
            format="DD-MM-YYYY"
            // minDate="2016-05-01"
            // maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              position: 'absolute',
            }}
            onDateChange={date => {
              var sectionIndex = getDateMap(
                props.histories[props.curStudent],
                date.toString(),
              );
              if (isNaN(sectionIndex)) {
                if (props.histories[props.curStudent].length != 0) {
                  var start = TimeUtils.formatDate(props.histories[props.curStudent][0].date);
                  var end = TimeUtils.formatDate(
                    props.histories[props.curStudent][props.histories[props.curStudent].length - 1].date,
                  );
                  Toast.show(end + ' -- ' + start);
                } else {
                  Toast.show('...');
                }
              } else {
                props.chooseCallback({
                  itemIndex: 0,
                  sectionIndex: sectionIndex,
                });
              }
            }}
          />
        </View>
      </LinearGradient>
    );
}

const mapStateToProps = state => {
    var student = state.studentList[state.curStudent]
    return {
      histories: state.history,
      studentList: state.studentList,
      curStudent: state.curStudent,
      student: state.student
    }
};
  
export default connect(mapStateToProps)(ToolBar);

