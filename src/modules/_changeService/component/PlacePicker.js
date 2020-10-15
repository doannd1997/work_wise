import React, {Component, useState} from "react";
import {View, FlatList, Text, TouchableOpacity, TextInput, Image} from "react-native";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/Entypo'

const styles = require("../style/styles").default;

const CENTER_POINT = "21.007833,105.841361";
const COUNTRY_CODE = "VNM";
const LANG = "vn";
const PLACE_SEARCH = "@place_search@";
const HERE_API_KEY = "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4";

var URL = "https://discover.search.hereapi.com/v1/discover?at=" + CENTER_POINT + "&q=" + PLACE_SEARCH + "&countryCode:" + COUNTRY_CODE + "&lg=" + LANG + "&apikey=" + HERE_API_KEY;

const PlaceItem = (props, name)=>{
    return(
        <View style={styles.placeItemContainer}>
            <TouchableOpacity onPress={()=>{

            }}>
                <Text>
                    Place ... {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const missCallback = (text, props)=>{
    var _text = text.split(" ").join("+");
    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
          var res = JSON.parse(request.responseText).items;
          var listPlace = res.map((place)=>{
              return {
                title: place.title,
                position: place.position
              }
          });
          global.cacher.storeTempPlace(text, listPlace);
          props.dispatch({type: "SET_SEARCH_RESULT", listPlace: listPlace})
      } else {
      }
    };

    request.open('GET', URL.replace(PLACE_SEARCH, _text));
    request.send();
}

const onPress=(text, props)=>{
  text = text.trim();
  global.cacher.getTempPlace(text, (listPlace)=>{
    props.dispatch({type: "SET_SEARCH_RESULT", listPlace: listPlace})
  }, ()=>{
    missCallback(text, props);
  })
}

const PlacePicker = (props)=>{
    return (
      <View style={styles.PlacePickerContainer}>
        <View style={styles.txtContainer}>
          <View style={styles.placeSearchPanel} />
          <TextInput
            style={styles.txtPlace}
            caretHidden={false}
            clearButtonMode={'always'}
            onChangeText={text => {
              onPress(text, props);
            }}
            placeholder={global.localization.getLang('lang_input_address')}
            placeholderTextColor={'#ddd'}
            onFocus={()=>{
                props.dispatch({type: "TYPING_SEARCH"})
            }}
          />
        </View>
        {props.searchResultShown ? (
          <View style={[styles.flatListContainer]}>
            <View style={[styles.flatListPanel]} />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.listPlace}
              renderItem={({item, index, seperator}) => {
                // return <Text>Hello</Text>
                return (
                  <View style={styles.placeItemContainer}>
                    <TouchableOpacity
                      style={styles.placeItem}
                      onPress={() => {
                        props.dispatch({type: "SELECT_PLACE", placeSelected: {latitude: item.position.lat, longitude: item.position.lng, title: item.title}});
                      }}>
                      <Image style={styles.imgPlaceSearch} source={require("../../../../res/image/HomeScreen/location.png")}/>
                      <Text style={styles.txtPlaceItem}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => item.key}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : null}
      </View>
    );
};

const mapStateToProps = (state)=>{
    return {
        homeAddress: state.homeAddress,
        listPlace: state.listPlace,
        searchResultShown: state.searchResultShown
    };
}

export default connect(mapStateToProps)(PlacePicker);


sample_res = {
    "items": [
        {
            "title": "Ngo Trai Ca, Quan Hai Ba Trung, Viet Nam",
            "id": "here:af:street:vmRfS1.ZPrfiu0c8DOuoLA",
            "resultType": "street",
            "address": {
                "label": "Ngo Trai Ca, Quan Hai Ba Trung, Viet Nam",
                "countryCode": "VNM",
                "countryName": "Viet Nam",
                "county": "Ha Noi",
                "city": "Quan Hai Ba Trung",
                "district": "Phuong Truong Dinh",
                "street": "Ngo Trai Ca"
            },
            "position": {
                "lat": 20.99381,
                "lng": 105.84676
            },
            "distance": 1657,
            "mapView": {
                "west": 105.84524,
                "south": 20.99299,
                "east": 105.84956,
                "north": 20.99494
            }
        }
    ]
}

