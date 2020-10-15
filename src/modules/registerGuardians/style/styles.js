import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;

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
    guardianContainer: {
        width: "100%",
        backgroundColor: "transparent",
        height: "40rem",
        padding: "1rem"
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
        height: "100%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    divForm: {
        width: "120rem",
        height: "170rem",
        borderRadius: "8rem",
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    formComposeHeader: {
        width: "100%",
        flex: 1,
        borderTopLeftRadius: "8rem",
        borderTopRightRadius: "8rem",
        backgroundColor: colors.theme2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    formComposeContent: {
        width: "100%",
        flex: 5
    },
    formEditFooter: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // borderTopWidth: 1,
        flexDirection: "row"
    },
    imgClose: {
        width: "100%",
        height: "100%"
    },
    imgAdd: {
        width: "12rem",
        height: "12rem"
    },
    btnGuardian: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
        flexDirection: "row"
    },
    avatar: {
        height: "90%",
        aspectRatio: 1,
        borderRadius: "20rem"
    },
    infoContainer: {
        backgroundColor: "#1a40ab",
        flex: 1,
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        paddingLeft: "2rem"
    },
    infoNameContainer: {
        width: "100%",
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    infoElementcontainer: {
        width: "100%",
        flex: 0.6,
        // backgroundColor: "blue"
    },
    textName: {
        fontSize: "8rem",
        fontWeight: "bold"
    },
    formLblHeader: {
        fontSize: "8rem",
    },
    headerBtnClose: {
        position: "absolute",
        width: "11rem",
        height: "11rem",
        right: "6rem"
    },
    btnCreateForm: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.theme2,
        borderBottomRightRadius: "8rem",
        borderBottomLeftRadius: "8rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem"
    },
    imgBtnCreate: {
        height: "100%",
        aspectRatio: 1
    },
    formDivContentAvatar: {
        // backgroundColor: "red",
        width: "100%",
        flex: 1,
        alignItems: "center",
        padding: "1rem"
    },
    formDivContentInfo: {
        backgroundColor: "transparent",
        width: "100%",
        flex: 1.3,
        flexDirection: "column"
    },
    formDivContentOther: {
        backgroundColor: "transparent",
        width: "100%",
        flex: 1
    },
    avatarContainer: {
        height: "100%",
        aspectRatio: 1,
    },
    avatar: {
        height: "100%",
        aspectRatio: 1,
        borderRadius: "80rem",
        backgroundColor: "#eee"
    },
    formAddTxt0: {
        width: "100%",
        flex: 1,
        flexDirection: "row"
    },
    inputLbl: {
        height: "100%",
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    inputField: {
        height: "100%",
        flex: 4,
        // backgroundColor: "cyan",
        paddingTop: "2rem",
        paddingBottom: "2rem"
    },
    formTxt: {
        // color: "#fff",
        fontSize: "8rem",
    },
    txtLblHeader: {
        fontSize: "6rem",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        color: "grey"
    },
    btnRemove: {
        borderBottomLeftRadius: "8rem"
    },
    btnUpdate: {
        borderBottomRightRadius: "8rem"
    },
    txtFooter: {
        fontSize: "7rem"
    },
    txtElement: {
        fontSize: "7rem"
    }
})