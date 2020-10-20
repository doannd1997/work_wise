import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default (styles = EStyleSheet.create({
  feed: {
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
  },

  imageContainer: {
    width: "100%",
    height: "120rem",
  },
  image: {
    flex: 1,
    width: "170rem",
    height: "100%",
  },


  contentTextContainer: {
    width: "100%",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    borderBottomWidth: "0.3rem",
    borderColor: colors.border
  },
  contentText: {
    color: colors.contentText,
    fontSize: "7.5rem",
    textAlign: "left",
    textAlignVertical: "top"
  },

  interationContainer: {
    marginLeft: "10rem",
    marginRight: "10rem",
    height: "24rem",
    marginTop: "3rem",
    marginBottom: "3rem",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  likeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  commentContainer: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLike: {
    height: "15rem",
    width: "15rem",
    padding: "2rem",
  },
  likeCountContainer: {
    height: "100%",
    // flex: 3,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  txtLikeCount: {
    // fontWeight: "bold",
    color: colors.likeCount,
    fontSize: "8rem"
  }
}));