import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity, ScrollView} from "react-native"
import {connect} from "react-redux"

import {StoreDefault} from "../../../home/redux/Redux";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
const NetWorking = require("../networking/Networking").default

const Indicator = require("../../../../common/component/Indicator").default


const resulltCallback = (props)=>{
    props.dispatch({type: "RESULT_GET_INFO_STUDENT"})
}
const updateStudent = (props)=>{
    var studentId = props.studentList[props.curStudent].studentId
    var data = {
        studentId: studentId
    }
    props.dispatch({type: "GET_INFO_STUDENT"})
    NetWorking.aipGetStudentInfo(data, (json)=>{
        props.dispatch({type: "SET_STUDENT_INFO", studentInfo: json})
        resulltCallback(props)
    }, ()=>{
        resulltCallback(props)
    })
}
class ChildInfo extends Component{
    componentWillMount(){
        updateStudent(this.props) 
    }
    componentWillUpdate(nextProps, nextState){
        if (this.props.curStudent != nextProps.curStudent){
            updateStudent(nextProps)
        }
    }
    render(){
        return (
            <View style={[commonStyles.fullViewVerticalCenter, {backgroundColor: "#fff"}]}>
                {!this.props.loadingStudentInfomation ? 
                 <ScrollView style={{width: "100%", height: "100%"}}
                 contentContainerStyle={[styles.scrollViewCotainer]}
                 showsVerticalScrollIndicator={false}
                 >
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_full_name")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.StudentName)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_student_code")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.StudentCode)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_grade")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.SchoolLevel)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_school_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.SchoolName)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_pick_header")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.PickupMethod)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_pick_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.pickUpAddress)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_pick_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.PickupTime)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_drop_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.deliveryAddress)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_drop_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.DeliverTime)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_bus_id")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.BKS)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_driver")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.DriverName)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_driver_phone")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.DriverPhone)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_monitor")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.MonitorName)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_monitor_phone")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.MonitorPhone)}</Text>
                 </Text>
                 <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                     {global.localization.getLang("lang_start_date_service")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.EffectiveDate)}</Text>
                 </Text>
             </ScrollView>
            : <Indicator/>}
            </View>
        )     
    }
};

const mapStateToProps = (state)=>{
    var studentInfo = state.studentInfomation[state.curStudent]
    if (studentInfo == undefined)
        studentInfo = {}
    var extraInfo = global.registerData.getMergeStudent()[state.curStudent]
    return {
        studentList: state.studentList,
        curStudent: state.curStudent,
        studentInfo: studentInfo,
        loadingStudentInfomation: state.loadingStudentInfomation,
        pickUpAddress: extraInfo.homeAddress,
        deliveryAddress: extraInfo.homeAddress
    }
}

export default connect(mapStateToProps)(ChildInfo);

const getParsedField = (field)=>{
    if (field == "" || field == null)
        return "---"
    return field
}