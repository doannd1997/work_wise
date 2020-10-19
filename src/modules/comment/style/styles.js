import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;
import {StyleSheet } from 'react-native'

export default EStyleSheet.create({
    container: {
        backgroundColor: colors.theme2
    },
    commentContainer: {
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
    inputComment: {
        height: "30rem",
        backgroundColor: colors.theme,
        // padding: "5rem",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "2rem",
        marginTop: "0rem",
        borderRadius: "5rem",
        elevation: 2,
        padding: "2rem"
    },
    commentInputTxt: {
        height: "100%",
        flex: 1,
        backgroundColor: colors.inputText,
        borderRadius: "5rem",
        marginRight: "2rem",
        fontSize: "8rem",
    },
    btnCommentContainer: {
        flex: 1,
        width: "40rem",
        // backgroundColor: 'cyan'
        padding: "3rem"
    }
})