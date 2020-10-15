import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout, Circle} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

import { DefaultRegion } from "../redux/Redux";

class BusComponent extends Component {
  render(){
    return (
      <Circle
        center={global.routeData.getBusLocation({
          latitude: this.props.busLocation.latitude, 
          longitude: this.props.busLocation.longitude
        })}
        radius={global.routeData.getBusRadius()}
        fillColor={"rgba(0,120,250,0.5)"}
        strokeWidth={0.2}
      >
      </Circle>
    );
  }
}

const checkinImg = require('../../../../res/image/StudenTracking/checkin_place.png')
const schoolImg = require("../../../../res/image/StudenTracking/school.png")
class CheckInCom extends Component {
  render(){
    const lngCheckIn = global.localization.getLang("lang_check_in")
    const lngSchool = global.localization.getLang("lang_school")
    return (
      <Marker
      // draggable
        coordinate={{
          latitude: this.props.data.Lati,
          longitude: this.props.data.Longi,
        }}
        title={this.props.isSchool ? lngSchool : lngCheckIn}
        description={
          this.props.data.Name
        }
        anchor={{x: 0.5, y: 1}}>
        <Image
          source={this.props.isSchool ? schoolImg : checkinImg}
          style={styles.checkinImg}
        />
      </Marker>
    )
  }
}

class MapViewComponent extends Component {
  render() {
    var self = this;
    return (
      <MapView
        showsUserLocation={true}
        mapType={this.props.mapType}
        style={[styles.map]}
        provider={PROVIDER_DEFAULT}
        initialRegion={{...this.props.studentLocation, latitudeDelta: DefaultRegion.latitudeDelta, longitudeDelta: DefaultRegion.longitudeDelta}}
        // region={{...this.props.studentLocation, latitudeDelta: DefaultRegion.latitudeDelta, longitudeDelta: DefaultRegion.longitudeDelta}}
        // onRegionChange={region => {
        //   self.props.dispatch({
        //     type: 'MAP_VIEW_UPDATE_REGION',
        //     region: region,
        //   });
        // }}
        >
        <Marker
          // draggable
          coordinate={{
            latitude: this.props.studentLocation.latitude,
            longitude: this.props.studentLocation.longitude,
          }}
          title={global.localization.getLang("lang_place_pick_delivery")}
          description={
            this.props.studentLocation.name
          }
          anchor={{x: 0.5, y: 1}}>
          <Image
            source={require('../../../../res/image/StudenTracking/location.png')}
            style={styles.markerImage}
          />
        </Marker>
        <BusComponent {...self.props} data={this.props.busLocation} />
        {this.props.checkins.map((item, index)=>{
          var _isSchool = isSchool(this.props, index)
          return <CheckInCom {...this.props} data={item} isSchool = {_isSchool}/>
        })}
      </MapView>
    );
  }
}

const mapStateToProps = (state)=>{
  var student = state.studentList[state.curStudent]
  var route = student.routes[state.routeType]
  return {
      region: state.region,
      mapType: state.mapType,
      curStudent: state.curStudent,
      studentList: state.studentList,
      routeType: state.routeType,
      studentLocation: {
        latitude: student.homeLatitude,
        longitude: student.homeLongitude,
        name: student.homeAddress
      },
      busLocation: {
        latitude: route.latitude,
        longitude: route.longitude
      },
      checkins: route.checkins,
      student: student
  }
}

const isSchool = (props, index)=>{
  var route = props.student.routes[props.routeType]
  if (props.routeType == "Pickup"){
      return index == (route.checkins.length - 1)
  }
  else {
      return index == 0
  }
  // return true
}

export default connect(mapStateToProps)(MapViewComponent);