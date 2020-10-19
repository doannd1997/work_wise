import React, {Component} from "react";
import {View, Text, StyleSheet, BackHandler} from "react-native"
import {connect, Provider} from "react-redux"
import NotLogInCom from "../../../../common/component/NotLogInCom";
import styles from "../style/styles";

const AccountComponent = require("./Main").default;

const commonStyles = require("../../../../common/style/index").default;

class Account extends Component{
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
      ...state
    }
}

export default connect(mapStateToProps)(Account);

