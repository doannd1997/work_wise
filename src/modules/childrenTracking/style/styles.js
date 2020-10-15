import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;

const BORDER = "2rem"
export default styles = EStyleSheet.create({
    divInfo: {
        position: "absolute",
        width: "98%",
        height: "55rem",
        bottom: "2rem",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        borderRadius: BORDER,
    },
    panelInfo: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.8,
        backgroundColor: "#111",
        position: "absolute",
        borderRadius: "2rem",
        borderColor: "#aaa",
        borderWidth: 1
    },
    viewInfo: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        paddingLeft: 10,
        alignItems: "flex-start",
        justifyContent: "space-around",
        flexDirection: "column"
    },
    btnClose: {
        width: "15rem",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.remove,
        borderTopRightRadius: BORDER,
        borderBottomLeftRadius: BORDER,
        padding: "3rem"
    },
    imgClose: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
    },
    btnChangeMode: {
        width: "40rem",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    btnCollapseDivInfo: {
        position: "absolute",
        width: "98%",
        height: 130,
        bottom: 3,
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    map: {
        // position: "absolute",
        flex: 1,
        width: "100%"
    },
    divExpand: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        width: "30rem",
        height: "15rem",
        bottom: "1rem",
        backgroundColor: "#1c1c1c",
        borderRadius: BORDER,
        opacity: 1,
    },
    btnExpand: {
        width: "30rem",
        height: "15rem",
        alignItems: "center",
        justifyContent: "center"
    },
    divInfoInside: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "red"
    },
    textDivInfoCommon: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "6rem",
        textAlignVertical: "center",
        height: "100%"
    },  
    iconDivInfo: {
        width: 50,
        // backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },  
    avatar: {
        width: "15rem",
        height: "15rem",
        borderRadius: "8rem",
        backgroundColor: "#eee",
        marginRight: "3rem"
    },
    iconOther: {
        width: "13rem",
        height: "13rem",
    },
    topRightClusterButton: {
        backgroundColor: "transparent",
        width: "55rem",
        height: "14rem",
        justifyContent: "flex-start",
        flexDirection: "row-reverse",
        alignItems: "center",
        // right: "7rem"
    },
    txtMapType: {
        color: "#fff",
        alignSelf: "center",
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        // fontWeight: "bold",
        alignSelf: "center",
        fontSize: "5.5rem"
    },
    markerImage: {
        width: "20rem",
        height: "20rem",
        // borderWidth: "0.5rem",
        // borderColor: "green",
        // borderRadius: "10rem"
    },
    checkinImg: {
        width: "20rem",
        height: "20rem",
    },
    busImage: {
        width: "20rem",
        height: "20rem",
    },
    childNameContainer: {
        margin: "2rem",
        width: "120rem",
        height: "90%",
        alignItems: "center",
        borderWidth: "1rem",
        borderColor: "#eee",
        borderRadius: "2rem",
        backgroundColor: "cyan"
    },
    childNameTxt: {
        color: "#333",
        fontSize: "7rem",
        fontWeight: "bold"
    },
    busInfoContainer: {
        position: "absolute",
        width: "98%",
        height: "75rem",
        top: "20rem",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        borderRadius: BORDER,
    },
    busInfoContainer_2: {
        width: "100%",
        height: "100%",
        padding: "3rem",
        flexDirection: "column"
    },
    itemBusInfoContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: "cyan"
        flexDirection: "row"
    },
    itemBusHeader: {
        fontSize: "6.5rem",
        fontWeight: "bold",
        color: "#fff"
    },
    itemBusTxt: {
        fontSize: "6.5rem",
        // fontWeight: "bold",
        // textAlign: "left",
        color: "#eee"
    },
    iconOtherContainer: {
        height: "100%",
        width: "12rem",
        justifyContent: "center",
        alignItems: "center"
    },
    txtInfoContainer: {
        height: "100%",
        flex: 1,
        paddingLeft: "3rem"
    }
})