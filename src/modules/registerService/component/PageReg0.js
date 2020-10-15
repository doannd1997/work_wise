import React, {Component, PureComponent} from "react";
import {View, Text, ActivityIndicator , Alert, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box'
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

import {QuickToast} from "../../../utils/Toast"

const PlacePickerCom = require("./PlacePicker").default;

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

class PageReg0 extends Component {
  changeHome() {
    this.props.dispatch({type: 'TOGGLE_PICKING', changeType: CHANGE_TYPE.HOME});
  }
  changePlace() {
    this.props.dispatch({
      type: 'TOGGLE_PICKING',
      changeType: CHANGE_TYPE.PLACE,
    });
  }
  render() {
    var self = this;
    return (
      <View style={styles.page}>
        <View style={styles.pickHome}>
          <View style={styles.pickItem}>
            <View style={styles.pickCell0}>
              <CheckBox
                // style={styles.checkbox}
                onClick={() => {
                  // this.props.dispatch({
                  //   type: 'TOGGLE_PICK_TYPE',
                  // });
                }}
                isChecked={this.props.pickType == 'HOME'}
                checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styles.imgCheckBox}/>}
                unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styles.imgCheckBox}/>}
              />
            </View>
            <View style={styles.pickCell1}>
              <Text style={styles.txtPick}>
                {global.localization.getLang('lang_pick_at_home') + " (" + this.props.distanceToSchool + " km)"}
              </Text>
            </View>
          </View>
          <View style={styles.pickSubItem}>
            <View style={styles.pickCell0} />
            <View style={styles.pickCell1}>
              <Text style={styles.txtHomeAddress} numberOfLines={2}>
                {this.props.homeAddress}
              </Text>
              <TouchableOpacity
                style={styles.btnChangeAddress}
                onPress={this.changeHome.bind(this)}>
                <Text style={styles.txtBtn}>
                  {global.localization.getLang('lang_change')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.pickPlace}>
          <View style={styles.pickItem}>
            <View style={styles.pickCell0}>
              <CheckBox
                style={{flex: 1, padding: 3, justifyContent: 'center'}}
                onClick={() => {
                  // this.props.dispatch({
                  //   type: 'TOGGLE_PICK_TYPE',
                  // });
                  QuickToast.show(global.localization.getLang("pick_up_option_not_available_1"))
                }}
                isChecked={this.props.pickType == 'PLACE'}
                checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styles.imgCheckBox}/>}
                unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styles.imgCheckBox}/>}
              />
            </View>
            <View style={styles.pickCell1}>
              <Text style={styles.txtPick}>
                {global.localization.getLang('lang_pick_at_place')}
              </Text>
            </View>
          </View>
          <View style={styles.pickSubItem}>
            <View style={styles.pickCell0} />
            <View style={styles.pickCell1}>
              <Text style={styles.txtHomeAddress} numberOfLines={2}>
                {this.props.placeAddress}
              </Text>
              <TouchableOpacity
                style={styles.btnChangeAddress}
                onPress={()=>{
                  QuickToast.show(global.localization.getLang("pick_up_option_not_available_1"))
                }}>
                <Text style={styles.txtBtn}>
                  {global.localization.getLang('lang_change')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={commonStyles.formBtnConfirm}
            onPress={() => {
              self.props.toNextPage();
            }}>
            <Text style={[commonStyles.formBtnOkText, styles.txtBottomButton]}>
              {global.localization.getLang('lang_next')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state)=>{
  var student = state.studentList[state.curStudent]
  if (student.placeSelected.latitude == student.homeLatitude && student.placeSelected.longitude == student.homeLongitude){
    var distanceToSchool = student.distanceToSchool
  }
  else {
    var distanceToSchool = student.distanceToSchool
  }
  return {
    pickType: state.pickType,
    homeAddress: student.placeSelected.title,
    placeAddress: state.placeAddress,
    distanceToSchool: distanceToSchool
  }
}

export default connect(mapStateToProps)(PageReg0)