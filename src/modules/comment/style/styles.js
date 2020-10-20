import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;
import {StyleSheet } from 'react-native'

import {Dimensions} from "react-native"

export default EStyleSheet.create({
    container: {
        backgroundColor: colors.theme2
    },
    commentsContainer: {
        flex: 1,
        backgroundColor: colors.theme,
        padding: "2rem",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        margin: "2rem",
        borderRadius: "5rem",
        elevation: 1
    },
    inputComment: {
        height: "30rem",
        backgroundColor: colors.theme,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "2rem",
        marginTop: "0rem",
        borderRadius: "5rem",
        elevation: 1,
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
        padding: "3rem"
    },

    btnLoadMoreContainer: {
        height: "15rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: "5rem",
    },
    btnLoadMore: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        alignItems: "flex-start",
    },
    txtLoadMore: {
        width: Dimensions.get('window').width,
        height: "100%",
        textAlignVertical: "center",
        fontWeight: "bold",
        color: "#555"
    },

    commentContainer: {
        flexDirection: "column",
        margin: 0,
        marginBottom: "2rem",
        backgroundColor: "transparent",
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: "4rem"
    },
    commentText: {
        backgroundColor: colors.theme3,
        marginRight: "3rem",
        width: "85%",
        borderRadius: "2rem",
        elevation: 1,
        fontSize: "7rem",
        color: "#000",
        paddingVertical: "2rem",
        paddingHorizontal: "3rem",
        color: "#fff"
    }
})