import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image, TouchableHighlight, Touchable} from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;

const TimeUtils = require("../../../utils/Times").default;

class Guardian extends Component{
    render(){
        return (
          <View style={[styles.guardianContainer]}>
            <TouchableHighlight
              style={commonStyles.fullBtn}
              // disabled
              onPress={() => {
                this.props.dispatch({
                  type: 'OPEN_TO_EDIT',
                  curGuardian: this.props.data,
                });
              }}>
              <View style={[styles.btnGuardian]}>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.avatar}
                    defaultSource={require('../../../../res/image/HomeScreen/user.png')}
                    source={this.props.data.item.avatarSource}
                    resizeMethod="resize"
                  />
                </View>
                <LinearGradient
                  style={styles.infoContainer}
                  colors={['#e08b3a', '#b12dcc']}
                  start={{x: 0, y: 0.65}}
                  end={{x: 1, y: 0}}>
                  <View style={styles.infoNameContainer}>
                    <Text
                      style={[commonStyles.text, styles.textName]}
                      numberOfLines={1}
                      ellipsizeMode={'tail'}>
                      {this.props.data.item.name}
                    </Text>
                  </View>
                  <View style={styles.infoElementcontainer}>
                    <Text
                      style={[commonStyles.text, styles.txtElement]}
                      numberOfLines={1}
                      ellipsizeMode={'tail'}>
                      {this.props.data.item.phoneNumber}
                    </Text>
                  </View>
                  <View style={styles.infoElementcontainer}>
                    <Text
                      style={[commonStyles.text, styles.txtElement]}
                      numberOfLines={1}
                      ellipsizeMode={'tail'}>
                      {this.props.data.item.role}
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </TouchableHighlight>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect(mapStateToProps)(Guardian);