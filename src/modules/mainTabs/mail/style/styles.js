import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default EStyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    content: {
      flex: 1,
      width: "100%",
      backgroundColor: "#fff"
    },
    mailContainer: {
        width: "100%",
        height: "36rem",
        padding: "1.2rem",
    },
    btnMail: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "1.2rem",
        paddingLeft: "2.5rem",
        paddingRight: "0.5rem"
    },
    mailHeaderContainer: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    mailContentContainer: {
        flex: 1.2,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
        paddingTop: "1.6rem",
        paddingLeft: "1.2rem"
    },
    mailTimeContainer: {
        flex: 1.5,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
        paddingLeft: "1.2rem",
    },
    mailLblHeader: {
        color: "grey",
        fontWeight: "bold",
        fontSize: "8rem"
    },
    mailLblHeaderNew: {
        color: "#088bbf"
    },
    mailLblHeaderNormal: {

    },
    mailLblContent: {
        color: "#444",
        // fontWeight: "bold",
        fontSize: "7rem",
        fontWeight: "bold"
    },
    mailLblTime: {
        fontStyle: "italic",
        color: "#03284f",
        fontSize: "6rem"
    },
    btnCreate: {
        position: "absolute",
        width: "20rem",
        height: "20rem",
        right: "12rem",
        bottom: "12rem",
        backgroundColor: "#088bbf",
        borderRadius: "20rem",
        shadowColor: "#fff",
        shadowOffset: {
            width: "1.2rem",
            height: "1.2rem"
        },
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        justifyContent: "center",
        alignItems: "center"
    },
    modalContentContainer: {
        width: "100%",
        // height: "100%",
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    divForm: {
        width: "120rem",
        height: "170rem",
        borderRadius: "2rem",
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    formComposeHeader: {
        width: "100%",
        flex: 1,
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        backgroundColor: colors.theme2,
        justifyContent: "center",
        alignItems: "center"
    },
    formComposeContent: {
        width: "100%",
        flex: 5
    },
    formComposeFooter: {
        width: "100%",
        flex: 1.6,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ddd"
    },
    btnSendContainer: {
        width: "95%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.theme2,
        borderRadius: "3rem",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    btnSendSchool: {

    },
    btnSendMonitor: {
        backgroundColor: "#0db865"
    },
    btnSend: {
        width: "100%",
        flex: 1,
        borderBottomLeftRadius: "1.2rem",
        borderBottomRightRadius: "1.2rem",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
    },
    btnSendLbl: {
        color: "#fff",
        fontSize: "8rem",
        fontWeight: "bold"
    },
    formComposeLblHeader: {
        color: "#fff",
        fontSize: "8rem",
        fontWeight: "bold"
    },
    txtMailContent: {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        color: "#333",
        fontSize: "8rem",
        padding: "4rem",
        textAlignVertical: "top"
    },
    headerBtnClose: {
        position: "absolute",
        width: "11rem",
        height: "11rem",
        right: "6rem"
    },
    imgClose: {
        width: "100%",
        height: "100%"
    },
    imgAdd: {
        width: "12rem",
        height: "12rem"
    },
    imgSendMail: {
        width: "20rem",
        height: "20rem",
        marginRight: "3rem"
    },
    btnOneMail: {
        width: "100%",
        height: "100%"
    },
    bottomButtonMailContentContainer: {
        width: "100%",
        height: "20rem",
        backgroundColor: "cyan",
        justifyContent: "center",
        flexDirection: "row"
    },
    mailDetailContainer: {
        width: "100%",
        flex: 1,
        padding: "10rem",
        backgroundColor: "#fff"
    },
    txtBtn: {
        fontSize: "7rem"
    },
    txtMailDetail: {    
        width: "100%",
        flex: 1,
        fontSize: "7rem",
        color: "#333",
        fontWeight: "bold"
    },
    newMail: {
        borderRightWidth: "3rem",
        borderColor: "#d44700"
    },
    readMail: {

    },
    line: {
        width: "0.8rem",
        height: "80%",
        backgroundColor: "#fff",
        margin: "2rem"
    },
    sendMethodContainer: {
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "0.2rem",
        paddingBottom: "0.22rem"
    },
    txtSendMailMethod: {
        color: "#fff",
        fontSize: "6.2rem",
        fontWeight: "bold"
    },
    sendMethodContent: {
        width: "100%",
        flex: 1,
        borderWidth: 0,
        justifyContent: "center",
    },
    sendMethodTxt: {
        color: "#fff",
        fontWeight: "bold"
    }
})