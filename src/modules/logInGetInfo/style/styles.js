import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;

import EStyleSheet from "react-native-extended-stylesheet";

export default styles = EStyleSheet.create({
    input: {
        width: "120rem",
        margin: "1rem",
        fontSize: "5rem"
    },
    button: {
        height: "20rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.commonButton,
    },
    text: {
        fontSize: "6rem"
    }
})