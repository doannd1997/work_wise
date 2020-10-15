import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

//Tool Bar
const ToolBar = require("../../../common/component/Toolbar").default;
// Bản đồ 
const MapViewCom = require("../component/MapView").default;
// Component chứa thông tin cơ bản của học sinh
const DefaultInfoCom = require("../component/DefaultInfo").default;
// Component chứa trạng thái học sinh đã lên xe hay chưa
const StatusCom = require("../component/Status").default;
// Component chứa địa điểm xuất đón trả
const PlaceCom = require("../component/Place").default;
// Component chưa thông tin tuyến bus
const BusInfoCom = require("../component/BusDetail").default;

const NetWorking = require("../networking/Networking").default;

const updateUI = (props)=>{
    var routeBatch = global.routeData.getTrackingBatch()
    var studentList = global.registerData.getMergeStudent(routeBatch)
    props.dispatch({type: "SET_TRACK_INFO", studentList: studentList})
    console.log("update tracking ui with loop: " + CONST.TIME_UPDATE + " ms")
}

class Main extends Component{
    componentWillMount(){
        var self = this
        updateUI(this.props)        
        this.intervalUpdate = setInterval(()=>{
          NetWorking.apiUpdate(self.props, function(){
              updateUI(self.props)
          });
        }, CONST.TIME_UPDATE)

        NetWorking.apiUpdate(self.props)
    }
    componentWillUnmount(){
        clearInterval(this.intervalUpdate)
    }
    render(){
        var self = this;
        return (
          <View
            style={[
              commonStyles.fullViewVerticalCenter,
              commonStyles.screenWithToolBar,
            ]}>
            <ToolBar
              style={commonStyles.toolBar}
              params={{
                title: 'lang_student_tracking',
                navigation: 'HomeScreen',
              }}
            />
            <MapViewCom />
            {this.props.CHILDREN_TRACKING_showingDivInfo ? (
              <View style={styles.divInfo}>
                <View
                  style={[
                    commonStyles.fullViewVerticalCenter,
                    styles.panelInfo,
                  ]}
                />
                <View
                  style={[
                    commonStyles.fullViewVerticalTopDown,
                    styles.viewInfo,
                  ]}>
                  <DefaultInfoCom style={styles.divInfoInside} />
                  <StatusCom style={styles.divInfoInside} />
                  <PlaceCom style={styles.divInfoInside} />
                </View>
                <View style={styles.topRightClusterButton}>
                  <TouchableOpacity
                    style={[styles.btnClose]}
                    onPress={() => {
                      self.props.dispatch({
                        type: 'CHILDREN_TRACKING_showingDivInfo__HIDE',
                      });
                    }}>
                    <Image style={styles.imgClose} source={require("../../../../res/image/popup/close.png")}
                    resizeMethod={"resize"}/>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}

            {this.props.CHILDREN_TRACKING_showingDivInfo ? null : (
              <View style={styles.divExpand}>
                <TouchableOpacity
                  style={styles.btnExpand}
                  onPress={() => {
                    self.props.dispatch({
                      type: 'CHILDREN_TRACKING_showingDivInfo__SHOW',
                    });
                    self.props.dispatch({
                      type: 'MAP_VIEW_RESET_REGION',
                    });
                  }}>
                  <Icon name="arrow-up" size={30} color={'#ffffff'} />
                </TouchableOpacity>
              </View>
            )}
            {this.props.CHILDREN_TRACKING_showingDivInfo ? <BusInfoCom/> : null}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        CHILDREN_TRACKING_showingDivInfo: state.CHILDREN_TRACKING_showingDivInfo,
        mapType: state.mapType,
    }
}

export default connect(mapStateToProps)(Main)

const CONST = {
  TIME_UPDATE: 5000
}