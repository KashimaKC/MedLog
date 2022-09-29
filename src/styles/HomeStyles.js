import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({

    container : {
        padding : 30,
        display: "flex",
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems : 'center'
    },
    header : {
        padding: 5,
        //text color below 
        color : '#e0e0e0',
        display: "flex",
        alignContent: "center",
        width: "75%",
        textAlign : "center",
        fontSize: 25,
        borderColor: 'black',
        //use this for dark bg
        backgroundColor: '#232c3d',
        borderWidth: 3,
        borderRadius: 12
    },
    navBar : {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },
    logButton : {
        margin : 15,
        padding: 5,
        width : "50%",
        alignItems : "center",
        justifyContent : "center",
        borderColor: "black",
        borderWidth : 3,
        borderRadius : 4,
        backgroundColor : "#324466"
    },
    buttonText : {
        fontSize : 24,
        color : "#e0e0e0"
    },
    settingStyle : {
        fontSize: 35,
        margin: 10
    }

});

export default HomeStyles;