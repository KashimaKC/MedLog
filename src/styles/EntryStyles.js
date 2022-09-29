import { StyleSheet } from "react-native";

const EntryStyles = StyleSheet.create({

    viewContainer: {
        backgroundColor: 'grey',
        display: "flex",
        alignItems: "center",
        borderRadius: 5
    },
    headerStyle : {
        fontSize : 20,
        fontWeight: "bold"
    },
    pickerStyle : {
        width: 200,
        textAlign: "center"
    },
    submitButtonStyle: {
        backgroundColor: 'black',
        padding: 20,
        margin: 15,
        borderRadius: 15
    },
    submitButtonText: {
        color: "white"
    }

});

export default EntryStyles;