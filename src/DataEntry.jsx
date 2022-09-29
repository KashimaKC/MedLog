import { Component } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import EntryStyles from "./styles/EntryStyles"

const DataEntry = () => {


    return (
        <View style={EntryStyles.viewContainer}>
            <Text>Enter Log:</Text>
        </View>
    );
}


export default DataEntry