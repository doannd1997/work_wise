import React, {Component} from "react";
import {View, Text, StyleSheet, BackHandler} from "react-native"
import {connect, Provider} from "react-redux"
import NotLogInCom from "../../../../common/component/NotLogInCom";
import styles from "../style/styles";

const SearchComponent = require("./Main").default;
const commonStyles = require("../../../../common/style/index").default;

import {store} from "../redux/redux"

class Search extends Component{
  render(){
      return (
        <Provider
          store = {store}
        >
          <View style={[commonStyles.fullViewVerticalCenter]}>
              <SearchComponent
                style={commonStyles.fullViewVerticalCenter}
              />
          </View>
        </Provider>
      );
  }
}


export default Search

