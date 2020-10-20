import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;

import EStyleSheet from "react-native-extended-stylesheet";

export default styles = EStyleSheet.create({
    element: {
        width: "120rem",
        margin: "1rem",
        fontSize: "5rem",
        backgroundColor: "#fff",
        // fontSize: '10rem',
        padding: "2rem",
    },
    inputContainer: {
        borderWidth: "0.3rem",
        borderRadius: "2rem",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "25rem"
    },
    textInput: {
        fontSize: "7rem",
        fontWeight: "bold",
        // backgroundColor: "cyan",
        flex: 1
    },
    imgInputContainer: {
        height: "100%",
        aspectRatio: 1,
        // backgroundColor: "red",
        padding: "4rem"
    },  
    padder: {
        height: "15rem"
    },
    button: {
        height: "20rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.commonButton,
        borderRadius: "4rem"
    },
    text: {
        fontSize: "6rem"
    }
})