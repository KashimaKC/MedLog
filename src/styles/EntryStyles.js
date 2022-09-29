import { StyleSheet } from "react-native";

const EntryStyles = StyleSheet.create({

    viewContainer: {
        backgroundColor: '#232c3d',
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        minWidth: "90%",
        maxWidth: "90%",
    },
    headerStyle : {
        fontSize : 20,
        padding: 5,
        fontWeight: "bold",
        color: "#e0e0e0"
    },
    dateStyle : {
        fontSize: 18,
        padding: 5,
        color: "#e0e0e0"
    },
    pickerContainer : {
        padding: 5
    },
    pickerStyle : {
        width: 200,
        textAlign: "center",
        backgroundColor: "#324466",
        color: "#e0e0e0"
    },
    inputContainer : {
        padding: 5,
        width: "90%",         
    },
    textInputStyle : {
        padding: 5,
        backgroundColor: "#324466",
        color: "#e0e0e0"
    },
    bottomContainer : {
        dispaly: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    }, 
    submitButtonStyle : {
        backgroundColor: 'black',
        padding: 20,
        margin: 20,
        borderRadius: 15
    },
    submitButtonText : {
        color: "white"
    },
    exitButton : {
        fontSize: 35,
        margin: 10,
        padding: 9,
        backgroundColor: "red",
        color: "black",
        borderRadius: 15
    }

});

export default EntryStyles;