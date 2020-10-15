import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default EStyleSheet.create({
  sectionListHeader: {
    backgroundColor: colors.screenBg,
    height: "10rem",
    marginTop: "2rem",
    marginLeft: "2rem",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemBoadring: {
    backgroundColor: '#00c206',
  },
  itemGetOff: {
    backgroundColor: 'orange',
  },
  headerText: {
    fontWeight: '300',
    fontFamily: 'arial',
    fontSize: "7rem",
    color: '#fff',
    backgroundColor: '#aaaaaa',
    width: "50rem",
    height: "100%",
    borderRadius: "4rem",
    textAlign: 'center',
    textAlignVertical: "center",
    fontWeight: 'bold',
  },
  sectionListItem: {
    height: "20rem",
    // paddingLeft: 10,
    marginLeft: "4rem",
    marginRight: "4rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: "1rem",
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: "1rem", height: "1rem"},
    elevation: 3,
  },
  itemActionType: {
    height: '100%',
    fontWeight: 'bold',
    // fontSize: 16,
    flex: 1.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  itemTime: {
    height: '100%',
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTimeText: {
    color: '#fff',
    fontSize: "7rem",
  },
  itemPlace: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
    color: '#000',
    padding: "1rem",
  },
  toolBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: '6rem',
    // paddingRight: '2rem',
    flexDirection: 'row',
  },
  btnPickDate: {
    width: "60rem",
    height: "100%",
    backgroundColor: colors.toolBarBtn,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: "12rem",
    paddingRight: "12rem",
  },
  infoDiv: {
    flex: 1,
    height: '100%',
    // backgroundColor: "cyan",
    justifyContent: 'center',
  },
  dateTimePicker: {
    position: 'absolute',
    alignSelf: 'center',
  },
  txtTimeRecorded: {
    // fontStyle: 'italic',
    fontSize: "6.5rem",
    color: "#fff"
  },
  txtSelect: {
      fontSize: "6.5rem"
  },
  imgPick: {
      width: "11rem",
      height: "11rem"
  },
  imgUpDown: {
      alignSelf: "center",
      width: "16rem",
      height: "16rem"
  },
  txtPlace: {
      fontSize: "6rem",
      color: "#555"
  },
  childNameContainer: {
    width: "100%",
    height: "100%",
    padding: "1rem"
  },
  childNameContent: {
    width: "100%",
    height: "100%",
    borderWidth: "0.75rem",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "cyan"
  },
  childName: {
    fontSize: "7rem",
    fontWeight: "bold",
    color: "#fff"
  }
});