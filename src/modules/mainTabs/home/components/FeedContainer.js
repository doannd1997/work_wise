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
          onRefresh={()=>{
            console.log("refresh")
          }}
          refreshing={false}
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
      "http://www.jamrecruitment.co.uk/blog/wp-content/uploads/2019/06/engineering-blog-image.png",
      "https://online-engineering.case.edu/user/pages/09.blog/how-to-become-an-engineer/Case-Howtobecomeanengineerbackground.jpg",
      "https://ichef.bbci.co.uk/images/ic/832xn/p078qlfn.jpg"
    ],
    content: "Carrieer Info:\n*Salary: $xxx xxxxxx xxxxxx xxxxxxx xxxxxxxx xxxxxx\n     Condition 1\n     Condition 2\n     Condition 3\n     Condition 4",
    like: 123,
    comment: 123,
    ownerId: 0,
    ownerName: "Owner 1",
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
    ownerName: "Owner 2",
    avatar: '',
    postedTime: '19/10/2020 15:34'
  },
  {
    id: 3,
    imageSrc: [
      "http://www.jamrecruitment.co.uk/blog/wp-content/uploads/2019/06/engineering-blog-image.png",
      "https://online-engineering.case.edu/user/pages/09.blog/how-to-become-an-engineer/Case-Howtobecomeanengineerbackground.jpg",
      "https://ichef.bbci.co.uk/images/ic/832xn/p078qlfn.jpg"
    ],
    content: "Your image should start downloading, ",
    like: 345,
    comment: 345,
    ownwerId: 0,
    ownerName: "Owner 3",
    avatar: '',
    postedTime: '19/10/2020 15:34'
  },
]