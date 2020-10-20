import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;
import {StyleSheet } from 'react-native'

export default EStyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column"
    },
    coverContainer: {
        width: "100%",
        flex: 1,
    },
    infoContainer: {
        height: "80rem",
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
        flex: 3,
        backgroundColor: colors.theme,
        padding: "5rem",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
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
    btnContainer: {
        height: "25rem",
        backgroundColor: colors.theme,
        padding: "5rem",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "2rem",
        borderRadius: "5rem",
        elevation: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    btnLogOut: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "8rem"
    }
})