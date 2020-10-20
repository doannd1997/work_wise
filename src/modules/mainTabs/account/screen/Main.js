import React, {Component} from "react";
import {View, Text, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";

import { useRoute, useNavigation } from '@react-navigation/native';

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
const UserHeader = require("../../../../common/component/UserHeader").default

const ToolBar = require("../../../../common/component/Toolbar").default;

class Main extends Component{
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        return (
            <View style={[commonStyles.fullView, styles.profileContainer]}>
                <ToolBar params={{title: "lang_profile"}}/>
                <UserHeader {...convertProps()}/>
                <View style={[commonStyles.contentContainer]}>
                    <Text>Notification</Text>
                </View>
                <TouchableOpacity 
                    style={[styles.btnContainer]}
                    onPress={()=>{
                        global.navigation.navigate("MainLogin")
                    }}
                >
                    <Text style={[styles.btnLogOut]}>
                        {global.localization.getLang("lang_log_out")}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab
    }
}

export default connect(mapStateToProps)(Main);

const convertProps = (props)=>{
    return {
        ownerName: "Nguyen Van A",
        clickable: false,
        alone: true,
        extrasInfo: "Following:12K"
    }
}