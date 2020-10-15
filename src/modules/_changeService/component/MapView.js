import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;
import {QuickToast} from "../../../utils/Toast";
import style from "../../../common/style";

const API_KEY = "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4"
const LANG = "vn";
const LOCATION_CODE = "@location@";
var URL = "https://revgeocode.search.hereapi.com/v1/revgeocode?at=" + LOCATION_CODE + "&lg=" + LANG + "&apikey=" + API_KEY;

const BubbleBtn = require("../../../common/component/BubbleButton").default
import {BTN_TYPE} from "../../../common/component/BubbleButton"


const reverseGeoCode = function(location, props){
  var request = new XMLHttpRequest();
  encodedLocation = location.latitude + "%2C" + location.longitude;
  var _URL = URL.replace(LOCATION_CODE, encodedLocation);
  request.onreadystatechange = e => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
        var res = JSON.parse(request.responseText);
        var placeSelected = {
          latitude: location.latitude,
          longitude: location.longitude,
          title: res.items[0].title
        };
        props.dispatch({type: "SELECT_PLACE", placeSelected: placeSelected})
    } else {
      QuickToast.show("ERR");
    }
  };

    request.open('GET', _URL);
    request.send();
    props.dispatch({type: "START_LOADING"})
}


class MapViewComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var self = this;
    return (
      <View style={commonStyles.fullViewVerticalCenter}>
        <MapView
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapType={this.props.mapType}
          style={[styles.map]}
          provider={PROVIDER_DEFAULT}
          initialRegion={this.props.region}
          region={this.props.region}
          onRegionChange={region => {
            self.props.dispatch({
              type: 'MAP_VIEW_UPDATE_REGION',
              region: region,
            });
          }}>
          {this.props.placeSelected != null ? (
            <Marker
              coordinate={{
                latitude: this.props.placeSelected.latitude,
                longitude: this.props.placeSelected.longitude,
              }}
              draggable={true}
              onPress={()=>{
                
              }}
              onDragEnd={(e)=>{
                var coordinate = e.nativeEvent.coordinate;
                reverseGeoCode(coordinate, self.props);
              }}
              onDragStart={(e)=>{
                this.marker.hideCallout();
              }}
              ref={_marker => {
                this.marker = _marker;
              }}
            >
              <Image source={require('../../../../res/image/HomeScreen/pin.png')} style={styles.imgPin}/>
              <Callout>
                <Text style={{fontWeight: "bold"}}>
                  {this.props.placeSelected.title}
                </Text>
              </Callout>
              </Marker>
          ) : null}
        </MapView>
        {BubbleBtn(BTN_TYPE.CLOSE, ()=>{
          self.props.dispatch({type: "TOGGLE_PICKING"})
        })}
      </View>
    );
  }
}

const mapStateToProps = function(state){
    return {
      placeSelected: state.placeSelected,
      region: state.region,
    }
}

export default connect(mapStateToProps)(MapViewComponent);