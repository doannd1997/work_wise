import React, {Component} from "react";
import {View, Text, StyleSheet, BackHandler} from "react-native"
import {connect, Provider} from "react-redux"
import NotLogInCom from "../../../../common/component/NotLogInCom";
import styles from "../style/styles";

const SearchComponent = require("./Main").default;

const commonStyles = require("../../../../common/style/index").default;

class Search extends Component{
  render(){
      return (
        <View style={[commonStyles.fullViewVerticalCenter]}>
            <SearchComponent
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

export default connect(mapStateToProps)(Search);

