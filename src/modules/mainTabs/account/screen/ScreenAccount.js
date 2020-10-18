import React, {Component} from "react";
import {View, Text, StyleSheet, BackHandler} from "react-native"
import {connect, Provider} from "react-redux"
import NotLogInCom from "../../../../common/component/NotLogInCom";
import styles from "../style/styles";

const AccountComponent = require("./Main").default;

const commonStyles = require("../../../../common/style/index").default;

class Account extends Component{
  componentWillMount(){
    var studentList = global.routeData.getTrackingBatch()
    studentList = global.registerData.getMergeStudent(studentList)
    this.props.dispatch({type: "SET_STUDENT_LIST", studentList: studentList})
  }
    render(){
        return (
          <View style={[commonStyles.fullViewVerticalCenter]}>
              <AccountComponent
                style={commonStyles.fullViewVerticalCenter}
              />
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        curTab: state.curTab,
        parentAvatar: state.parentAvatar,
        parentName: state.parentName
    }
}

export default connect(mapStateToProps)(Account);

