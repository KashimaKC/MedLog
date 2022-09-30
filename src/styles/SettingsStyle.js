import { StyleSheet } from "react-native";

const SettingsStyle = StyleSheet.create({

    settingsContainer : {
        display: "flex",
        backgroundColor: "grey",
        width: "100%",
        alignItems: "center",
        borderRadius: 20,
        padding: 5
    },
    settingsText : {
        padding: 10,
        fontSize: 18
    },
    bottomContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60%"
    },
    clearButtons : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "red",
        padding: 10,
        margin: 5,
        borderRadius: 10
    },
    buttonContents : {
        color: "black",
        fontSize: 16
    },
    cancelIcon : {
        fontSize: 20,
        paddingLeft: 10
    },
    backButtonContainer : {
        display: "flex",
        backgroundColor: "#324466",
        borderRadius: 10
    },
    backButton : {
        fontSize: 20,
        padding: 10,
        color: "white"
    }
});

export default SettingsStyle;