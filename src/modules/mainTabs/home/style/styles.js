import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default (styles = EStyleSheet.create({
  btnLogin: {
    // borderRadius: 12,
    // borderWidth: 2,
    // borderColor: '#ffffff',
    height: "100%",
    width: "60rem",
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1c3266",
    // right: 7,
    // alignSelf: "center",
  },
  toolBarUser: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 5,
  },
  avatar: {
    width: "15rem",
    height: "15rem",
    borderRadius: "10rem",
    // borderWidth: "0.2rem",
    borderColor: 'grey',
    margin: "1rem",
    backgroundColor: "#eee"
  },
  gridView: {
    flex: 1,
    width: '100%',
    padding: 5,
    backgroundColor: colors.screenBg
  },
  buttonGrid: {
    width: '100%',
    height: "100%",
    flexDirection: 'row-reverse',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "flex-end"
  },
  buttonGridHeader: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: "9rem",
    position: "absolute",
    marginLeft: "18rem",
    paddingBottom: "5rem",
  },
  imgTheme: {
      width: 180,
      height: "100%",
      borderRadius: 4,
      position: "absolute",
      right: 0
  },
  gridderItemContainer: {
    padding: "2rem",
    width: "100%",
    aspectRatio: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  gridderItem: {
    width: "100%",
    height: "100%",
    borderRadius: "5rem"
  },
  iconAndNameContainer: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
  },
  headerContainer: {
    width: "100%",
    flex: 1.2,
    justifyContent: "center",
    paddingLeft: "40rem",
    // backgroundColor: "red"
  },
  description: {
    color: "#bbb",
    fontSize: "6rem"
  },
  iconContainer: {
    height: "100%",
    aspectRatio: 1,
    padding: "10rem"
  },
  descriptionContainer: {
    height: "100%",
    flex: 4,
    paddingTop: "15rem",
    paddingRight: "5rem"
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: "20rem"
  },
  txtLogIn: {
    fontSize: "6rem"
  },
  txtHeader: {
    fontSize: "8rem"
  }
}));