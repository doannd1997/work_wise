import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;
const MailListCom = require("../component/MailList").default;
const ButtonCreate = require("../component/BtnCreate").default;
const PopupComposeCom = require("../component/PopUpConmpose").default;
const MailDetailCom = require("../component/MailDetail").default;

const Indicator = require("../../../../common/component/Indicator").default

class Main extends Component{
    render(){
        return (
          <View style={styles.container}>
            <ToolBar {...this.props}/>
            <View style={styles.content}>
              <MailListCom/>
              <ButtonCreate/>
              <MailDetailCom/>
              <PopupComposeCom/>
              {this.props.mail_loading ? <Indicator/> : null}
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        curTab: state.mail_curTab,
        isDisplayPopup: state.mail_isDisplayPopUp,
        mail_loading: state.mail_loading
    }
}

export default connect(mapStateToProps)(Main);
