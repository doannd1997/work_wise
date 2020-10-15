import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const MailComponent = require("./Main").default;
const NotLogInCom = require("../../../../common/component/NotLogInCom").default;

const NetWorking = require("../networking/NetWorking").default

import {QuickToast} from "../../../../utils/Toast"

const resultLoadMail = function(props){
    props.dispatch({type: "MAIL_STOP_LOAD"})
}

const updateMail = function(props){
    var inboxs = global.mailData.getInboxs()
    var sents = global.mailData.getSents()
    props.dispatch({
        type: "SET_MAIL",
        inboxs: inboxs,
        sents: sents
    })

    var numberOfNewMails = inboxs.filter(item=>!item.isRead).length
    if (props.numberOfNewMails != numberOfNewMails && numberOfNewMails != 0){
        props.dispatch({type: "SET_NUM_NEW_MAIL", numberOfNewMails: numberOfNewMails})
    }
}

class Mail extends Component{
    componentWillMount(){
        updateMail(this.props)        
    }
    componentWillUnmount(){
        clearInterval(this.updateScheduler)
    }
    render(){
        return (
            <View style={styles.container}>
            {this.props.logedIn ? (
              <MailComponent style={styles.container} />
            ) : (
              <NotLogInCom/>
            )}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        numberOfNewMails: state.numberOfNewMails
    }
}

export default connect(mapStateToProps)(Mail);


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})
