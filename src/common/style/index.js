import {StyleSheet} from "react-native";
const colors = require("../../color/Colors").default;
import {Platform, Dimensions} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

const DIM_WIDTH = Dimensions.get("window").didth;
const DIM_HEIGHT = Dimensions.get("window").height;
const ELEVATION = 3

import EStyleSheet from 'react-native-extended-stylesheet';

export default (styles = EStyleSheet.create({
  fullView: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  fullViewVerticalCenter: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
  },
  defaultColorBg: {
    backgroundColor: "#eee"
  },
  noBgColor: {
    backgroundColor: "transparent"
  },
  bgWhite: {
    backgroundColor: "#fff"
  },
  fullViewVerticalTopDown: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
  },
  fullViewVerticalBottomUp: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    flexDirection: 'column-reverse',
  },
  fullViewCenterHorizontal: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolBar: {
    width: '100%',
    height: "20rem",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: 0,
    backgroundColor: colors.theme,
    alignItems: 'center',
    elevation: ELEVATION
  },
  fullBtn: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  toolBarElementContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  toolBarElementContainerActive: {
    backgroundColor: colors.headerBar
  },
  toolBarElementContainerInactive: {
    backgroundColor: "#888"
  },
  fullTouchButton: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  toolBarBtnHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "6rem"
  },
  gradientToolBar: {
    height: "100%",
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Arial',
  },
  textBold: {
    fontWeight: 'bold',
  },
  screenWithToolBar: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.theme2
  },
  toolBarBtn: {
    width: 100,
    height: 35,
    backgroundColor: colors.toolBarBtn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  toolBarBtnHome: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolBarTitle: {
    color: colors.toolBarTitle,
    fontWeight: 'bold',
    fontSize: "8rem",
  },
  toolBarBtnBack: {
    position: "absolute",
    height: "100%",
    aspectRatio: 1,
    padding: "5.2rem",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  panel: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.6
  },
  divForm: {
    //ßposition: 'absolute',
    backgroundColor: '#fff',
    width: "80%",
    //marginTop: 100,
    // height: 400,
    aspectRatio: 3/4.5,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    elevation: ELEVATION,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  divFormTitle: {
    fontWeight: '200',
    fontSize: 16,
    color: '#fff',
    top: 0,
    backgroundColor: colors.theme2,
    width: '100%',
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: Platform.OS == 'ios' ? 2 : 0,
    fontWeight: 'bold',
  },
  dateTimePicker: {
    position: 'absolute',
    alignSelf: 'center',
    width: 300,
    height: 300,
    bottom: 80,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    elevation: ELEVATION,
    shadowOpacity: 0.3,
    bottom: 0,
  },
  alert: {
    position: 'absolute',
    alignSelf: 'center',
  },
  formBtnConfirm: {
    backgroundColor: '#194fa6',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBtnCancel: {
    backgroundColor: '#444444',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBtnRemove: {
    backgroundColor: "#f0190a",
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBtnOkText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  indicator: {
    position: "absolute",
    top: "50%",
    // alignSelf: "center",
    zIndex: 1000
  },
  txtInput: {
    borderBottomWidth: "0.5rem",
    borderBottomColor: "#ddd",
    width: "100%",
    height: "100%",
  },
  singleBtnContainer: {
    height: "100%",
    flex: 1
  },


  ////
  formContainer: {
    backgroundColor: colors.theme,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "150rem",
    height: "220rem",
    elevation: ELEVATION,
    borderRadius: "3rem"
  },
  marker: {
    position: "absolute",
    top: 0,
    right: "12rem",
    width: "16rem",
    aspectRatio: 1,
    alignItems: "center"
  },

  //
  noPadding: {
    padding: 0
  },  
  noMargin: {
    margin: 0
  },

  // content WHITE
  contentContainer: {
    backgroundColor: colors.theme,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "2rem",
    borderRadius: "4rem",
    elevation: 1,
    flexDirection: "column",
    flex: 1,
    alignSelf: "stretch"
  },

  // User Head
  ownerContainer: {
    // width: "100%",
    height: "30rem",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ownerContainerAlone: {
    backgroundColor: colors.theme3,
    margin: "2rem",
    borderRadius: "4rem",
    elevation: 1,
  },
  avatarContainer: {
    height: "100%",
    aspectRatio: 1,
    padding: "2rem",
    marginLeft: "3rem",
    justifyContent: "center",
    alignItems: "center"
  },
  ownerAvatar: {
    width: "25rem",
    height: "25rem",
    backgroundColor: "cyan",
    borderRadius: "40rem",
  },  
  ownerNameContainer: {
    height: "25rem",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "column",
    paddingLeft: "4rem",
    alignSelf: "center",
    paddingBottom: "3rem"
  },
  ownerNameTxt: {
    color: colors.ownerTitle,
    fontWeight: "bold",
    fontSize: "7rem"
  },
  extrasInfo: {
    fontWeight: "bold",
    fontSize: "5rem",
    color: colors.postedTime
  },
}));