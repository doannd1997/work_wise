import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
const colors = require("../../../color/Colors").default;

export default (styles = EStyleSheet.create({
  text: {
    fontSize: 16,
  },
  toolBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  },
  btnConfirm: {
    backgroundColor: colors.theme2,
    width: 310,
    height: 40,
    // flex: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    elevation: 5,
    shadowOpacity: 0.3,
  },
  divForm: {
    backgroundColor: 'grey',
    // height: 480
  },
  txtOk: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  map: {
    // position: "absolute",
    flex: 1,
    width: '100%',
    height: '100%',
  },
  YearPickerContainer: {
    width: "40%",
    flex: 1.05,
    marginBottom: "2rem",
    padding: "1rem",
    // backgroundColor: "red"
  },
  defaultInfo: {
    flex: 4.2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'cyan',
    width: '100%',
    // paddingBottom: 10
  },
  nameContainer: {
    height: '18%',
    marginBottom: "2rem",
  },
  avatarContainer: {
    marginTop: "2rem",
    marginBottom: "3rem",
    flex: 4,
    alignSelf: "center",
    width: '100%',
    alignItems: "center",
  },
  avatar: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: "20rem"
  },
  childName: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: "8rem",
    // backgroundColor: "blue",
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  itemYearPicker: {
    flex: 1,
    height: '100%',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 10,
    fontSize: '6rem',
  },
  btnYearPickerNavigate: {
      color: '#fff', 
      fontSize: "8rem"
  },
  viewDivForm: {
    width: '100%',
    flex: 12,
    // backgroundColor: "red",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pageViewContainer: {
    flex: 10,
    width: '100%',
  },

  page: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  pickHome: {
    width: '100%',
    flex: 4,
    // backgroundColor: "cyan",
    flexDirection: 'column',
  },
  pickPlace: {
    width: '100%',
    flex: 4,
    // backgroundColor: "grey"
  },
  btnContainer: {
    width: '100%',
    flex: 1.6,
    // backgroundColor:"cyan"
  },
  pickItem: {
    // backgroundColor: "blue",
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
  },
  pickSubItem: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
  },
  pickCell0: {
    height: '100%',
    flex: 0.6,
    // backgroundColor: "cyan",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  imgCheckBox: {
      width: "12rem",
      height: "12rem",
  },
  pickCell1: {
    height: '100%',
    flex: 4,
    // backgroundColor: "cyan",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: "#ff0f0f"
  },
  txtPick: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: "7rem",
    // fontStyle: "italic"
  },
  txtHomeAddress: {
    color: '#eee',
    fontSize: "6.5rem",
    fontStyle: 'italic',
    marginLeft: 10,
    height: '100%',
    flex: 4,
    // backgroundColor: "cyan",
    // lines: 2
  },
  btnChangeAddress: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "blue",
    height: '100%',
    flex: 8,
    marginRight: 6,
    marginLeft: 6,
    marginBottom: 15,
  },
  txtBtn: {
    color: '#c4dbff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontSize: "6rem",
    marginRight: "1rem"
  },
  PlacePickerContainer: {
    width: Dimensions.get('window').width - 20,
    // height: "100%",
    // backgroundColor: "cyan",
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'column',
    paddingTop: '4rem',
  },
  txtContainer: {
    width: '100%',
    height: '20rem',
    alignItems: 'center',
    // justifyContent: "center"
  },
  placeSearchPanel: {
    backgroundColor: '#333',
    opacity: 0.8,
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
  txtPlace: {
    width: '100%',
    height: '100%',
    borderRadius: '3rem',
    borderWidth: 1,
    borderColor: '#aaa',
    fontSize: '7rem',
    color: '#fff',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
  flatListContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },
  flatListPanel: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    opacity: 0.8,
    position: 'absolute',
    borderRadius: 10,
  },
  placeItemContainer: {
    width: '100%',
    height: '18rem',
    alignItems: 'center',
  },
  placeItem: {
    flex: 1,
    // backgroundColor: "cyan",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  txtPlaceItem: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '6rem',
  },
  selectPlaceContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: "25rem",
  },
  imgPin: {
    width: '20rem',
    height: '20rem',
  },
  txtBtnSelectPlace: {
      fontSize: "7rem"
  },
  labelMethodItem: {
    color: "#fff",
    fontWeight: "bold",
    flex: 4,
    fontSize: "6rem"
  },
  lblStartDateService: {
    color: "#333",
    // fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "7rem"
  },
  lblBtnTimeStart: {
    color: "#ddd",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: "7rem"
  },
  txtBottomButton: {
      fontSize: "7rem"
  },
  lblHeaderGuardians: {
    color: "#444",
    fontWeight: "bold",
    fontSize: "6rem",
    fontStyle: "italic"
  },
  imgPolicyCheckBox: {
      width: "8rem",
      height: "8rem"
  },
  lblPolicyHeader: {
    color: "#ddd",
    paddingLeft: "-20rem",
    flex: 3.6,
    textAlign: "right",
    fontSize: "6rem"
  },
  lblPolicyBtn: {
      fontSize: "6rem",
      textDecorationLine: "underline"
  },
  lblHeaderPartner: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "5.6rem",
    fontStyle: "italic"
  },
  imgPlaceSearch: {
    width: "10rem",
    height: "10rem"
  },
  YearPickerContainer: {
    width: "40%",
    flex: 1.05,
    marginBottom: "2rem",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue"
    margin: "1rem",
    borderWidth: "1rem",
    borderColor: "#999",
    borderRadius: "2rem"
  },
  lblCurYear: {
    color: "#fff",
    fontSize: "7rem",
    // backgroundColor: "red"
  },
  childNameContainer: {
    height: "18rem",
    width: "80%",
    borderWidth: "0rem"
  },
  childNameContent: {
      width: "100%", 
      height: "100%", 
      justifyContent: "center", 
      alignItems: "center", 
      borderTopWidth: "0.2rem",
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 0
  }
}));