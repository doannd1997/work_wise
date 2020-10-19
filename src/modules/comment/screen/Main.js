import React, {Component, useState} from "react";
import {View, Text, TextInput, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import { Provider } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;

const ToolBar = require("../../../common/component/Toolbar").default;

class Main extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        let _this = this
        return (
            <View style={[commonStyles.fullView, styles.container]}>
                <ToolBar params={{title: "lang_comment", exitable: true}}/>
                <View style={[styles.commentContainer]}>

                </View>
                <View style={[styles.inputComment]}>
                    <TextInput 
                        style={[styles.commentInputTxt]}
                        multiline={true}
                        placeholder={'   ......'}
                    />
                    <TouchableOpacity style={[styles.btnCommentContainer]}>
                        <Image
                            source={require("../../../../res/image/comment/message.png")}
                            resizeMode={"contain"}
                            resizeMethod={"resize"}
                            style={[commonStyles.fullView]}
                        />
                    </TouchableOpacity>
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