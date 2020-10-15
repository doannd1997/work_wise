import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {redux, connect} from "react-redux";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const NetWorking = require("../networking/NetWorking").default

class Mail extends Component{
    render(){
        return (
          <View style={[styles.mailContainer]}>
            <TouchableOpacity style={commonStyles.fullBtn} disabled>
              <View
                style={[styles.btnMail]}
                >
                <TouchableOpacity 
                    style={styles.btnOneMail}
                    onPress={()=>{
                        if (!this.props.data.item.isRead){
                          NetWorking.apiReadMail(this.props.data.item.MessageID)
                          global.scheduler.readMail()
                        }
                        this.props.dispatch({type: "MAIL_SHOW_MAIL", mail_mailIndex: this.props.data.index});
                    }}
                    >
                  <View style={styles.mailHeaderContainer}>
                    <Text
                      style={[styles.mailLblHeader, (!this.props.data.item.isRead && this.props.mail_curTab == 0) ? styles.mailLblHeaderNew : styles.mailLblHeaderNormal]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {
                        this.props.mail_curTab == 0 
                        ? this.props.data.item.Sender
                        : this.props.data.item.Receiver
                      }
                    </Text>
                  </View>
                  <View style={styles.mailContentContainer}>
                    <Text
                      style={styles.mailLblContent}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {this.props.data.item.MessageBody}
                    </Text>
                  </View>
                  <View style={styles.mailTimeContainer}>
                    <Text
                      style={styles.mailLblTime}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {this.props.data.item.MessageTime}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      mail_curTab: state.mail_curTab
    };
};

export default connect(mapStateToProps)(Mail);