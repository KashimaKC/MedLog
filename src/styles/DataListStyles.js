import { StyleSheet } from "react-native";

const DataListStyles = StyleSheet.create({

    dataListContainer : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#232c3d",
        padding: 15,
        margin: 5,
        minWidth: "97%",
        maxWidth: "97%",
        borderRadius : 8
    },
    dataText : {
        fontSize : 20,
        color : "white"
    },
    optionsButtonContainer : {
        display: "flex",
        justifyContent: "space-between"
    },
    discardButton : {
        marginBottom : 10,
        color: "black",
        backgroundColor: "red",
        fontSize: 30,
        borderRadius: 5,
        padding: 5
    },
    moreInfoButton : {
        marginTop: 10,
        color: "white",
        backgroundColor: "black",
        fontSize: 30,
        padding: 5,
        borderRadius: 5
    }

});

export default DataListStyles;