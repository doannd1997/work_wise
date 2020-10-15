import React, {Component} from "react";
import {View, Text, Modal, TextInput, Image, TouchableOpacity, Platform} from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from 'react-native-image-picker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;

const TimeUtils = require("../../../utils/Times").default;
import {QuickToast} from "../../../utils/Toast";
import Networking from "../networking/Networking";

const defaultAvatar =  require("../../../../res/image/guardians/police.png");

class PopUpConmpose extends Component {
  constructor(props){
    super(props);
    this.options = {
      title: global.localization.getLang("lang_select_image"),
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: false,
      maxWidth: 128,
      maxHeight: 128,
      quality: 1,
    };
  }
    render(){
        var self = this;
        return (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            visible={this.props.adding}
            style={styles.modal}>
            <View style={styles.modalContentContainer}>
              <View style={commonStyles.panel} />
              <View style={[styles.divForm]}>
                <LinearGradient
                  style={[styles.formComposeHeader]}
                  colors={[
                    colors.btnComposeLeft,
                    colors.btnComposeRight,
                  ]}
                  // start={[0, 0.65]}
                  start={{x: 0, y: 0.65}}
                  end={{x: 1, y: 0}}>
                  <Text
                    style={[
                      commonStyles.text,
                      commonStyles.textBold,
                      styles.formLblHeader,
                    ]}>
                    {global.localization.getLang(
                      'lang_create_guardians',
                    )}
                  </Text>
                  <TouchableOpacity
                    style={styles.headerBtnClose}
                    onPress={() => {
                      self.props.dispatch({type: 'CLOSE_POP_UP_ADD'});
                    }}>
                    <Image
                      source={require('../../../../res/image/popup/close.png')}
                      style={styles.imgClose}
                      resizeMethod={'scale'}
                    />
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.formComposeContent}>
                  <View style={styles.formDivContentAvatar}>
                    <TouchableOpacity
                      sytyle={styles.avatarContainer}
                      onPress={() => {
                        ImagePicker.showImagePicker(
                          this.options,
                          response => {
                            if (response.didCancel) {
                              
                            } else if (response.error) {
                              
                            } else if (response.customButton) {
                              
                            } else {
                              var source;

                              if (Platform.OS === 'android') {
                                source = {
                                  uri: response.uri,
                                  isStatic: true,
                                };
                              } else {
                                source = {
                                  uri: response.uri.replace(
                                    'file://',
                                    '',
                                  ),
                                  isStatic: true,
                                };
                              }

                              source.data = response.data

                              // const source = { uri: response.uri };

                              // You can also display the image using data:
                              // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                              this.props.dispatch({
                                type: 'SET_ADD_AVATAR',
                                addAvatarSource: source,
                              });
                            }
                          },
                        );
                      }}>
                      <Image
                        defaultSource={require('../../../../res/image/guardians/police.png')}
                        source={this.props.addAvatarSource}
                        style={styles.avatar}
                        resizeMethod={'resize'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.formDivContentInfo}>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {global.localization.getLang(
                            'lang_full_name',
                          )}
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                          onChangeText={(text)=>{
                            this.props.dispatch({
                              type: 'UPDATE_PSEUDO',
                              pseudoGuardian: {
                                ...this.props.pseudoGuardian,
                                item: {
                                  ...this.props.pseudoGuardian.item,
                                  name: text
                                },
                              },
                            });
                          }}
                          defaultValue={""}
                        />
                      </View>
                    </View>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {global.localization.getLang(
                            'lang_phone_number_collapse',
                          )}
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                          onChangeText={(text)=>{
                            this.props.dispatch({
                              type: 'UPDATE_PSEUDO',
                              pseudoGuardian: {
                                ...this.props.pseudoGuardian,
                                item: {
                                  ...this.props.pseudoGuardian.item,
                                  phoneNumber: text
                                },
                              },
                            });
                          }}
                          defaultValue={""}
                        />
                      </View>
                    </View>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {global.localization.getLang(
                            'lang_role',
                          )}
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                          onChangeText={(text)=>{
                            this.props.dispatch({
                              type: 'UPDATE_PSEUDO',
                              pseudoGuardian: {
                                ...this.props.pseudoGuardian,
                                item: {
                                  ...this.props.pseudoGuardian.item,
                                  role: text
                                },
                              },
                            });
                          }}
                          defaultValue={""}
                        />
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.formDivContentOther} /> */}
                </View>
                <View style={styles.formEditFooter}>
                  <View style={styles.btnCreateForm}>
                    <TouchableOpacity
                      style={styles.btnCreateForm}
                      onPress={() => {
                        var guardian = this.props.pseudoGuardian;
                        Networking.apiCreateGuardian(guardian.item, ()=>{
                          global.guardianData.addGuardian(guardian.item)
                        },
                        ()=>{

                        })
                        this.props.dispatch(
                          {
                            type:
                              'ADD_GUARDIAN',
                            guardian: guardian,
                            index: this
                              .props
                              .pseudoGuardian
                              .index,
                          },
                        );
                      }}>
                      <Image
                        source={require('../../../../res/image/popup/add_white_128.png')}
                        style={styles.imgBtnCreate}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      adding: state.adding,
      addAvatarSource: state.addAvatarSource,
      pseudoGuardian: state.pseudoGuardian
    }
};

export default connect(mapStateToProps)(PopUpConmpose);

