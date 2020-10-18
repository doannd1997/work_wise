import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const Feed = require('../components/Feed').default

const FeedContainer = props => {
    const navigation = useNavigation();
    return (
      <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
        <FlatList
          style={[commonStyles.fullView]}
          showsVerticalScrollIndicator={false}
          bounces={true}
          data={dataList}
          renderItem={({item, index})=>{
            return <Feed {...item}/>
          }}
          keyExtractor={(item, index) => index.toString()}
          />
      </View>
    );
};

const mapStateToProps = state => ({
  logedIn: state.logedIn
});

export default connect(mapStateToProps)(FeedContainer);


const dataList = [
  {
    id: 1,
    imageSrc: [

    ],
    content: "Your image should start downloading, ",
    like: 123,
    comment: 123,
    ownerId: 0,
    ownerName: "Owner 0",
    avatar: '',
    postedTime: '19/10/2020 15:34'
  },
  {
    id: 2,
    imageSrc: [

    ],
    content: "Your image should start downloading, ",
    like: 345,
    comment: 345,
    ownwerId: 0,
    ownerName: "Owner 1",
    avatar: '',
    postedTime: '19/10/2020 15:34'
  },
]