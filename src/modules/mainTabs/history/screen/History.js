import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const HistoryComponent = require("./Main").default;
const NotLogInCom = require("../../../../common/component/NotLogInCom").default;
const NetWorking = require("../networking/Networking").default

class History extends Component{
  componentWillMount(){
    var histories = global.historyData.getStudentHistories(this.props.studentList)
    this.props.dispatch({type: "SET_HISTORY", histories: histories})
  }
  render(){
    return (
      <View style={styles.container}>
        {this.props.logedIn ? (
          <HistoryComponent style={styles.container} />
        ) : (
          <NotLogInCom />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
  var student = state.studentList[state.curStudent]
  return {
    logedIn: state.logedIn,
    studentList: state.studentList,
    curStudent: state.curStudent,
    student: student
  }
}

export default connect(mapStateToProps)(History);


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})

const commonStyle = require("../../../../common/style/index").default;