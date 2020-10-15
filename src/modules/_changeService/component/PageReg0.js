import React, {Component, PureComponent} from "react";
import {View, Text, ActivityIndicator , Alert, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box'
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

const MapViewCom = require("./MapView").default;
const YearPickerCom = require("./YearPicker").default;
import { Pages } from 'react-native-pages';
const Times = require("../../../utils/Times").default;

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
                  this.props.dispatch({
                    type: 'TOGGLE_PICK_TYPE',
                  });
                }}
                isChecked={this.props.pickType == 'HOME'}
                checkedImage={<Image source={require("../../../../res/image/service/checked.png")} style={styles.imgCheckBox}/>}
                unCheckedImage={<Image source={require("../../../../res/image/service/unchecked.png")} style={styles.imgCheckBox}/>}
              />
            </View>
            <View style={styles.pickCell1}>
              <Text style={styles.txtPick}>
                {global.localization.getLang('lang_pick_at_home')}
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
                  this.props.dispatch({
                    type: 'TOGGLE_PICK_TYPE',
                  });
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
                onPress={this.changePlace.bind(this)}>
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


const mapStateToProps = function(state){
    return {
      pickType: state.pickType,
      homeAddress: state.homeAddress,
      placeAddress: state.placeAddress,
    }
}

export default connect(mapStateToProps)(PageReg0)