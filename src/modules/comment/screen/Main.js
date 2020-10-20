import React, {Component, useState} from "react";
import {View, Text, TextInput, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import { Provider } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;
import {ACTION_TYPE} from "../redux/redux"
const ToolBar = require("../../../common/component/Toolbar").default;
const Comment = require("../component/Comment").default

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
                <View style={[styles.commentsContainer]}>
                    <View style={[styles.btnLoadMoreContainer]}>
                        <TouchableOpacity 
                            style={[styles.btnLoadMore]}
                            onPress={()=>{
                                _this.props.dispatch({type: ACTION_TYPE.LOAD_MORE})
                                // _this.flatList.refresh()
                                _this.flatList.scrollToIndex({index: 0})
                            }}
                        >
                            <Text style={[styles.txtLoadMore]}>
                                {global.localization.getLang("lang_viewMore")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList 
                        ref={(item)=>{_this.flatList = item}}
                        style={[commonStyles.fullView]}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                        data={this.props.comments}
                        renderItem={({item, index})=>{
                          return <Comment {...item} index={index}/>
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={[styles.inputComment]}>
                    <TextInput 
                        style={[styles.commentInputTxt]}
                        multiline={true}
                        placeholder={'   ......'}
                        onChangeText={(text)=>{
                            _this.props.dispatch({type: ACTION_TYPE.TYPE_COMMENT, comment: text})
                        }}
                        value={_this.props.comment}
                    />
                    <TouchableOpacity 
                        style={[styles.btnCommentContainer]}
                        onPress={()=>{
                            _this.props.dispatch({
                                type: ACTION_TYPE.NEW_MY_COMMENT,
                                content: _this.props.comment,
                                ownerName: "Me",
                                postedTime: "Now",
                                expanded: false
                            })
                            setTimeout(()=>{
                                this.flatList.scrollToEnd()
                            }, 500)
                        }}
                    >
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
        comments: state.comments,
        comment: state.comment
    }
}

export default connect(mapStateToProps)(Main);

