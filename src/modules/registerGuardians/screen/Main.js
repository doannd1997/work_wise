import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const store = require("../redux/Redux").default;
const styles = require("../style/styles").default;

// const ToolBar = require("../component/ToolBar").default;
const ToolBar = require("../../../common/component/Toolbar").default;
const GuardiansCom = require("../component/Guardians").default;
const ButtonCreate = require("../component/BtnCreate").default;
const PopUpCreate = require("../component/PopUpCreate").default;
const PopUpUpdate = require("../component/PopUpUpdate").default;

class Main extends Component{
    render(){
        return (
          <View style={styles.container}>
            <ToolBar {...this.props} params={{title: "lang_register_guardian", navigation: "HomeScreen"}}/>
            <View style={styles.content}>
              <GuardiansCom/>
              <ButtonCreate/>
              <PopUpCreate/>
              <PopUpUpdate/>
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        
    }
}

export default connect(mapStateToProps)(Main);
