import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import EStyleSheet from "react-native-extended-stylesheet";

import { connect } from "react-redux";

const commonStyles = require("../style/index").default;
const colors = require("../../color/Colors").default;

const NotLogInCom = props =>{
    var navagation = useNavigation();
    return (
      <View style={[commonStyles.fullViewVerticalCenter, styles.container]}>
        <Text style={styles.txtNotLogin}>
            {global.localization.getLang("lang_noti_login")}
        </Text>
        <View style={[styles.input, styles.button]}>
            <TouchableOpacity style={commonStyles.fullBtn}
                onPress={()=>{
                    navagation.navigate("MainLogin")
                }}
            >
                <Text style={[commonStyles.text, commonStyles.textBold, styles.text]}>
                    {global.localization.getLang("lang_login")}
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
    return {}
  };
  
export default connect(mapStateToProps)(NotLogInCom);


const styles = EStyleSheet.create({
    container: {
        backgroundColor: colors.screenBg
    },  
    input: {
        width: "120rem",
        margin: "1rem",
        fontSize: "5rem"
    },
    button: {
        height: "20rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.commonButton,
    },
    text: {
        fontSize: "6rem"
    },
    txtNotLogin: {
        fontSize: "7rem",
        color: "#555",
        marginBottom: "3rem"
    }
})

