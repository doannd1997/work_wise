import React, {Component} from "react";
import {View, Text, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const ToolBar = require("../../../../common/component/Toolbar").default;
const ParentTab = require("../component/ParentTab").default;
const ChildTab = require("../component/ChildTab").default;

class Main extends Component{
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        return (
            <View style={[commonStyles.fullView, styles.profileContainer]}>
                <ToolBar params={{title: "lang_profile"}}/>
                <View style={[styles.infoContainer]}>
                    <View style={[styles.avatarContainer]}>
                        <Image style={[commonStyles.fullView, styles.avatar]}
                            source={require("../../../../../res/image/HomeScreen/user.png")}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={[styles.txtName]}>
                            DisplayName
                        </Text>
                        <Text style={[styles.txtFollow]}>
                            Following: 1K
                        </Text>
                        <Text style={[styles.txtFollow]}>
                            Follower: 2K
                        </Text>
                    </View>
                </View>
                <View style={[styles.feedContainer]}>

                </View>
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