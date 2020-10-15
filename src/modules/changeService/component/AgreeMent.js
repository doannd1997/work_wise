import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from 'react-native-webview'
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import EStyleSheet from 'react-native-extended-stylesheet'

const commonStyles = require("../../../common/style").default;
const styless = require("../style/styles").default;

const dimen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

class Agreement extends Component{
    render(){
        var self = this;
        return (
          <View
            style={[
              commonStyles.fullViewVerticalTopDown,
              styles.container,
            ]}>
            <View style={styles.contentContainer}>
              <WebView 
                source={{ uri: student.agreementUri }} 
                startInLoadingState={true}
                scalesPageToFit={true}
                style={dimen}
              />
            </View>
            <View style={styles.bottomBtn}>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity
                  style={commonStyles.formBtnCancel}
                  onPress={()=>{
                    self.props.dispatch({type: "REJECT_AND_HIDE_AGREEMENT"})
                  }}>
                  <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                    {global.localization.getLang('lang_reject')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity
                  style={commonStyles.formBtnConfirm}
                  onPress={() => {
                    self.props.dispatch({type: "ACCEPT_AND_HIDE_AGREEMENT"})
                  }}>
                  <Text style={[commonStyles.formBtnOkText, styless.txtBottomButton]}>
                    {global.localization.getLang('lang_accept')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }
};

const mapStateToProps = (state)=>{
  student = state.studentList[state.curStudent]
  return {
      // showAgreement: state.showAgreement
      student: student
  }
}

export default connect(mapStateToProps)(Agreement);


const styles = EStyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBtn: {
        // flex: 1,
        backgroundColor: "cyan",
        width: "100%",
        height: "20rem",
        flexDirection: "row"
    },
    singleBtnContainer: {
        height: "100%",
        flex: 1,
    }
})