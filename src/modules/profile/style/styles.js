import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;
import {StyleSheet } from 'react-native'

export default EStyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column"
    },

    infoContainer: {
        height: "100rem",
        backgroundColor: colors.theme,
        padding: "5rem",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "2rem",
        borderRadius: "5rem",
        elevation: 2
    },
    feedContainer: {
        flex: 1,
        backgroundColor: colors.theme,
        padding: "5rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "2rem",
        borderRadius: "5rem",
        elevation: 2
    },
    avatarContainer: {
        height: "100%",
        width: "50rem",
        // backgroundColor: "cyan",
        padding: "4rem"
    },
    avatar: {
        borderRadius: "20rem",
    },
    nameContainer: {
        // backgroundColor: "orange",
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "3rem",
    },
    txtName: {
        width: "100%",
        // flex: 1.8,
        textAlignVertical: "center",
        fontSize: "10rem",
        fontWeight: "bold",
        color: colors.ownerTitle,
        height: "20rem",
        // backgroundColor: "cyan"
    },
    txtFollow: {
        width: "100%",
        // flex: 1,
        textAlignVertical: "top",
        color: colors.follow,
        height: "15rem",
        textAlignVertical: "center",
        // backgroundColor: "red",
        fontSize: "6rem"
    },
    profileContainer: {
        backgroundColor: colors.theme2
    },
    followContainer: {
        // height: "100%",
        // flex: 0.8,
        // backgroundColor: "cyan",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    },
    btnFollowDefault: {
        width: "40rem",
        height: "14.5rem",
        borderRadius: "2rem",
        justifyContent: "center",
        alignItems: "center"
    },
    btnToFollow: {
        borderColor: colors.btnFollowDisable,
        borderWidth: "1rem"
    },
    btnToUnfollow: {
        backgroundColor: colors.btnFollowEnable
    },
    txtFollowDefault: {
        fontSize: "8rem",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    txtFollowed: {
        color: "#fff"
    },
    txtNotFollowed: {
        color: colors.btnFollowDisable
    }
})