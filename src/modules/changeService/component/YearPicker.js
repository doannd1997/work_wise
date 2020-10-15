import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import Swiper from 'react-native-swiper'
import ModalSelector from "react-native-modal-selector";
const styles = require("../style/styles").default;

class YearPicker extends Component{
    render(){
        return (
          <View style={styles.YearPickerContainer}>
            <ModalSelector
              style={{width: "100%", height: "100%"}}
              selectStyle={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}
              initValueTextStyle={styles.yearTxt}
              cancelText={global.localization.getLang("lang_confirm_cancel")}
              data={this.props.yearList.map((item, index)=>{
                return {
                  label: item,
                  key: index
                }
              })}
              initValue={this.props.yearList[this.props.curYearIdx]}
              onChange={(option)=>{
                this.props.dispatch({type: 'CHANGE_YEAR', curYearIdx: option.key})
              }} />
          </View>
        );
    }
}

class CurYear extends Component{
  render(){
    return (
      <View style={styles.YearPickerContainer}>
        <Text
          style={styles.lblCurYear}
          >
            {this.props.yearList[this.props.curYearIdx]}
      </Text>
      </View>
    );
  }
}




const mapStateToProp = (state)=>{
    return {
        yearList: state.yearList,
        curYearIdx: state.curYearIdx
    }
};

export default connect(mapStateToProp)(CurYear);
