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
    searchContainer: {
        height: "25rem",
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
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "2rem",
        borderRadius: "5rem",
        elevation: 2
    },
    avatarContainer: {
        height: "80%",
        aspectRatio: 1,
        // backgroundColo: "cyan",
    },
    avatar: {
        borderRadius: "20rem",
    },
    nameContainer: {
        // backgroundColor: "cyan",
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingLeft: "3rem"
    },
    txtName: {
        width: "100%",
        flex: 1.8,
        textAlignVertical: "center",
        fontSize: "8rem",
        fontWeight: "bold",
        color: colors.ownerTitle
    },
    txtFollow: {
        width: "100%",
        flex: 1,
        textAlignVertical: "top",
        fontSize: "5rem",
        color: colors.follow
    },
    profileContainer: {
        backgroundColor: colors.theme2
    }
})