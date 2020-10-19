import React, {Component, useState} from "react";
import {View, Text, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import {store, ACTION_TYPE} from "../redux/redux"

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;

const ToolBar = require("../../../common/component/Toolbar").default;
const Marker = require("../../../common/component/Marker").default;

class Main extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        let profile = this.props.route.params._profile
        let _this = this
        return (
            <View style={[commonStyles.fullView, styles.profileContainer]}>
                <ToolBar params={{title: "lang_profile", exitable: true}}/>
                <View style={[styles.infoContainer]}>
                    <View style={[styles.avatarContainer]}>
                        <Image style={[commonStyles.fullView, styles.avatar]}
                            source={require("../../../../res/image/HomeScreen/user.png")}
                            resizeMode={"contain"}
                        />
                        <View style={[styles.followContainer]}>
                            <TouchableOpacity 
                                style={[styles.btnFollowDefault, _this.props.followed ? styles.btnToUnfollow : styles.btnToFollow]}
                                onPress={()=>{
                                    store.dispatch({type: ACTION_TYPE.TOGGLE_FOLLOW})
                                }}
                            >
                                <Text
                                    style={[styles.txtFollowDefault, _this.props.followed ? styles.txtFollowed : styles.txtNotFollowed]}
                                >
                                    {global.localization.getLang(this.props.followed ? "lang_followed" : "lang_follow")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={[styles.txtName]}>
                            {profile.ownerName}
                        </Text>
                        <Text style={[styles.txtFollow]}>
                            Following: 1K
                        </Text>
                        <Text style={[styles.txtFollow]}>
                            Follower: 2K
                        </Text>
                    </View>
                    <Marker/>
                </View>
                <View style={[styles.feedContainer]}>
                    <Text>
                        [FEED]
                    </Text>
                </View>
            </View>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        followed: state.followed
    }
}

export default connect(mapStateToProps)(Main);