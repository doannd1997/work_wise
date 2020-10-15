import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;

import EStyleSheet from "react-native-extended-stylesheet";

export default styles = EStyleSheet.create({
    element: {
        width: "120rem",
        margin: "1rem",
        fontSize: "5rem",
        backgroundColor: "#fff",
        fontSize: '10rem',
        padding: "2rem",
    },
    input: {
        borderBottomWidth: "0.3rem",
        borderRadius: "2rem"
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