import React, {Component} from "react";
import {View, Text, TouchableOpacity, Modal, TextInput, Image, Alert, SafeAreaView } from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import style from "../../../../common/style";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
const QuickToast = require("../../../../utils/Toast").QuickToast;

const NetWorking = require("../networking/NetWorking").default

class MailDetail extends Component {
    render(){
        var self = this;
        return (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            visible={this.props.showingMail}
            style={styles.modal}>
            <SafeAreaView style={styles.modalContentContainer}>
                <View style={styles.mailDetailContainer} >
                    <Text style={styles.txtMailDetail}>
                        {this.props.mailIndex == null ? null : this.props.curTab == 0 ? this.props.inbox[this.props.mailIndex].MessageBody : this.props.sentMail[this.props.mailIndex].MessageBody}
                    </Text>
                </View>
              <View style={styles.bottomButtonMailContentContainer}>
                <View style={commonStyles.singleBtnContainer}>
                  <TouchableOpacity style={commonStyles.formBtnRemove}
                    onPress={()=>{

                        var header = global.localization.getLang("lang_alert_header");
                        var content = global.localization.getLang("lang_confirm_delete_mail");
                        var okLabel = global.localization.getLang(
                        'lang_confirm_ok',
                        );
                        var cancelLabel = global.localization.getLang(
                        'lang_confirm_cancel',
                        );
                        Alert.alert(
                        header,
                        content,
                        [
                            {
                            text: okLabel,
                            onPress: () => {
                                var mail = this.props.curTab == 0 
                                  ? this.props.inbox[this.props.mailIndex] 
                                  : this.props.sentMail[this.props.mailIndex]
                                NetWorking.apiDeleteMail(mail.MessageID)
                                this.props.dispatch({
                                    type: "MAIL_DELETE_MAIL"
                                })
                            },
                            },
                            {
                            text: cancelLabel,
                            onPress: () => {
                                QuickToast.show("Canceled");
                            },
                            },
                        ],
                        {cancelable: true},
                        );
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.text,
                        commonStyles.textBold,
                        styles.txtBtn,
                      ]}
                    >
                        {global.localization.getLang("lang_delete")}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={commonStyles.singleBtnContainer}>
                  <TouchableOpacity style={commonStyles.formBtnConfirm}
                    onPress={()=>{
                        this.props.dispatch({
                            type: "MAIL_ClOSE_MAIL"
                        })
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.text,
                        commonStyles.textBold,
                        styles.txtBtn,
                      ]}
                    >
                        {global.localization.getLang("lang_close")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        showingMail: state.mail_showing,
        curTab: state.mail_curTab,
        mailIndex: state.mail_mailIndex,
        inbox: state.mail_inbox,
        sentMail: state.mail_sentMail,
    }
};

export default connect(mapStateToProps)(MailDetail);