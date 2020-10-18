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
    parentCover: {
        width: "100%",
        height: "100%"
    },
    parentInfoContainer: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 3,
        alignItems: "center",
        flexDirection :"column"
    },
    parentAvatarContainer: {
        width: "70rem",
        height: "35rem",
        top: "-35rem",
    },
    parentAvatar: {
        width: "70rem",
        height: "70rem",
        backgroundColor: "#fafafa",
        borderRadius: "35rem",
        borderWidth: "0.4rem",
        borderColor: "grey"
    },
    otherInfoContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        paddingTop: "5rem",
    },
    parentNameContainer: {
        width: "100%",
        height: "20rem",
        justifyContent: "center",
        borderRadius: "10rem",
        alignItems: "center",
    },
    btnChangePasswordContainer: {
        width: "90%",
        height: "20rem",
        backgroundColor: colors.commonButton,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4rem",
        marginTop: "10rem"
    },
    btnLogOutContainer: {
        width: "90%",
        height: "20rem",
        backgroundColor: "#f00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4rem",
        marginTop: "10rem"
    },
    parentName: {
        fontSize: "10rem",
        textAlign: "center",
        color: "grey"
    },
    txtLogOut: {
        fontSize: "10rem"
    },
    childNameContent: {
        borderWidth: 0,
        borderBottomWidth: "0.5rem",
        width: "100%",
        height: "100%",
        flex: 1,
    },
    childName: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "grey",
        fontSize: "8rem",
        fontWeight: "bold",
        width: "100%"
    },
    guardiansContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        flexDirection: "column"
    },
    guardiansHeaderContainer: {
        width: "100%",
        height: "20rem",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    guardiansList: {
        width: "100%",
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    lblHeaderGuardiansList: {
        fontSize: "7rem",
        color: "#333"
    },
    optionContainer: {
        width: "100%",
        height: "20rem",
        flexDirection: "row",
        // backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "5rem"
    },
    imgCheckBox: {
        width: "12rem",
        height: "12rem"
    },
    lblGuardian: {
        color: "grey",
        fontSize: "6rem",
        marginLeft: "5rem"
    },
    guardianAvatar: {
        width: "22rem",
        height: "22rem",
        borderRadius: "12rem",
        backgroundColor: "#fff"
    },
    checkboxContainer: {
        width: "20rem",
        // height: "100%"
    },
    childHeaderContainer: {
        height: "100%",
        flex: 1,
        backgroundColor: "#fff"
    },
    activeChildTab: {
        borderBottomWidth: "1rem",
        borderColor: "cyan"
    },
    inactiveWatchMode: {
        color: "grey"
    },
    activeWatchMode: {
        color: colors.theme2
    },
    scrollViewCotainer: {
        margin: "3rem"
    },
    txtInfoHeader: {
        fontSize: "7rem",
        color: "#333",
        margin: "3rem"
    },
    txtInfoContent: {
        fontSize: "7rem",
        fontWeight: "normal",
        color: colors.thickTheme
    },
    btnChildHeader: {
        // backgroundColor: "#fff",
        elevation: 0
    },


    infoContainer: {
        height: "60rem",
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