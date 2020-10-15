import React, {Component} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import {redux, connect} from "react-redux";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const Mail = require("../component/Mail").default;
const colors = require("../../../../color/Colors").default;

const NetWorking = require("../networking/NetWorking").default

const resultLoadMail = function(props){
    props.dispatch({type: "MAIL_STOP_LOAD"})
}

const updateMail = function(props){
    props.dispatch({type: "MAIL_START_LOAD"})
    NetWorking.apiRequestGetMessages(props, (responseText)=>{
        var json = JSON.parse(responseText)
        global.mailData.setData(json)

        var inboxs = global.mailData.getInboxs()
        var sents = global.mailData.getSents()
        props.dispatch({
            type: "SET_MAIL",
            inboxs: inboxs,
            sents: sents
        })

        resultLoadMail(props)
    }, 
    ()=>{
        resultLoadMail(props)
    })
}


class MailListCom extends Component{
    render(){
        return (
            <FlatList style={[{flex: 1, backgroundColor: colors.screenBg}]}
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                data={this.props.curTab == 0 ? this.props.inbox : this.props.sentMail}
                keyExtractor={(data, key)=>key}
                renderItem={(data)=>{
                    return <Mail data={data}/>
                }}
                refreshing={false}
                onRefresh={()=>{
                    updateMail(this.props)
                }}
                ref={"mailList"}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        curTab: state.mail_curTab,
        inbox: state.mail_inbox,
        sentMail: state.mail_sentMail
    }
};

export default connect(mapStateToProps)(MailListCom);