import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

import {StoreConst} from "../redux/Redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class BusDetail extends Component{
    render(){
        var self = this;
        return (
        <View style={[styles.busInfoContainer]}>
            <View
                style={[
                commonStyles.fullViewVerticalCenter,
                styles.panelInfo,
                ]}
            />
            <View
                style={[
                commonStyles.fullViewVerticalTopDown,
                styles.busInfoContainer_2,
                ]}>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_bus_name")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        {getRouteName(this.props)}
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_bks")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        {getBks(this.props)}
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_driver")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        {getDriverName(this.props)}
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_monitor")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        {getMonitorName(this.props)}
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_time_bus_pick")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        {getBusTime(this.props)}
                    </Text>
                </View>
            </View>
          </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        curStudent: state.curStudent,
        studentList: state.studentList,
        routeType: state.routeType
    }
}

export default connect(mapStateToProps)(BusDetail)

const getRoute = (props)=>{
    return props.studentList[props.curStudent].routes[props.routeType]
}

const getRouteName = (props)=>{
    return getRoute(props).routeName
}

const getBks = (props)=>{
    return getRoute(props).bks
}

const getDriverName = (props)=>{
    return getRoute(props).driverName
}

const getMonitorName = (props)=>{
    return getRoute(props).monitorName
}

const getBusTime = (props)=>{
    return getRoute(props).endTime
}