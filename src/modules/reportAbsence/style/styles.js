import {StyleSheet} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;

export default styles = EStyleSheet.create({
    input: {
        width: 300,
        margin: 5,
    },
    button: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.commonButton,
    },
    text: {
        fontSize: 16
    },
    toolBar: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row"
    },
    itemInfo: {
        width: "100%",
        height: 80,
        margin: 5
    },
    btnCluster: {
        backgroundColor: "grey",
        flex: 9,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    pickDateCluster: {
        flexDirection: "row",
        width: "100%",
        flex: 4,
        justifyContent: "space-around",
        alignItems: "center"
    },
    inputFieldItem: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    inputFieldFirstColumn: {
        height: "100%",
        flex: 1,
        marginLeft: "6rem",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    inputFieldSecondColumn: {
        // width: 220,
        flex: 5,
        height: "80%",
        margin: 3,
        // alignSelf: "center",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 3,
        marginLeft: 20
    },
    inputFieldSecondColumnWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
        shadowOpacity: 0.3,
    },
    pickerItem: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center"
    },
    formInputCluster: {
        flex: 9.2,
        width: "100%",
        flexDirection: "column",
    },
    btnConfirmContainer: {
        width: "100%",
        flex: 2
    },
    pickDateItem: {
        width: "48%",
        height: "96%",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        elevation: 5,
        shadowOpacity: 0.3,
        backgroundColor: "#fff",
        paddingBottom: "10rem",
        borderRadius: "6rem"
    },
    btnPickerDateItem: {
        width: "100%",
        height: "100%",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10%"
    },
    pickDateHeader: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "#444",
        fontWeight: "bold",
        fontSize: "7rem"
    },
    pickDateTime: {
        width: "100%",
        height: 45,
        // backgroundColor: "red",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        color: "#eee"
    },
    
    btnConfirm: {
        backgroundColor: colors.theme2,
        width: "100%",
        height: "100%",
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        elevation: 5,
        shadowOpacity: 0.3,
    },
    txtOk: {
        color: "#fff",
        fontSize: 18
    },
    defaultInfo: {
        flex: 4,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "cyan",
        width: "100%",
        paddingBottom: "1rem"
    },
    avatarContainer: {
        marginTop: "5rem",
        marginBottom: "4rem",
        flex: 1,
    },
    avatar: {
        height: "100%",
        aspectRatio: 1,
        // backgroundColor: "red",
        borderRadius: "20rem"
    },
    childName: {
        color: "#eee",
        fontWeight: "bold",
        fontSize: "8rem",
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        width: "100%",
        height: "100%"
    },
    iconBus: {
        width: "90%",
        height: "90%",
        backgroundColor: "#eee",
        padding: "2rem",
        borderRadius: "2rem"
    },
    pickerStyle: {
        // inputIOS: {
        //     color: 'white',
        //     paddingTop: 13,
        //     paddingHorizontal: 10,
        //     paddingBottom: 12,
        // },
        // inputAndroid: {
        //     color: 'white',
        // },
        fontSize: "8rem",
        // color: "#000"
    },
    imgCalendar: {
        width: "25rem",
        height: "25rem"
    },
    txtOk: {
        fontSize: "8rem"
    },
    txtBusType: {
        color: "#fff",
        fontSize: "8rem"
    },
    busTypeContainer: {
        width: "100%", 
        height: "100%",
        backgroundColor: "grey",
    },
    childNameContainer: {
        height: "18rem",
        width: "80%",
        borderWidth: "0rem"
    },
    childNameContent: {
        width: "100%", 
        height: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        borderTopWidth: "0.2rem",
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 0
    }
})