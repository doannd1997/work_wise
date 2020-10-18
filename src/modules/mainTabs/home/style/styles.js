import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default (styles = EStyleSheet.create({
  feed: {
    height: "240rem",
    backgroundColor: colors.theme,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "2rem",
    borderRadius: "4rem",
    elevation: 1,
    flexDirection: "column"
  },
  ownerContainer: {
    width: "100%",
    height: "30rem",
    flexDirection: "row",
    justifyContent: "flex-start"
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
  postedTimeTxt: {
    fontWeight: "bold",
    fontSize: "5rem",
    color: colors.postedTime
  }
}));