import { Component } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import SettingsStyle from "./styles/SettingsStyle"
import Ionicons from "@expo/vector-icons/Ionicons"

class SettingsPage extends Component {
    constructor(props) {
        super(props);

        let isRendered = true;
        this.state = {isRendered:isRendered}
    }

    render() {

        if (this.state.isRendered == true) {
            return (
                <View style={SettingsStyle.settingsContainer}>
                    <Text>Test</Text>
                </View>
            );
        }
    }
}

export default SettingsPage;