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

    _setRenderTrue = () => {
        this.setState({isRendered: true});
    }

    _setRenderFalse = () => {
        this.setState({isRendered: false});
    }

    render() {

        if (this.state.isRendered == true) {
            return (
                <View style={SettingsStyle.settingsContainer}>
                    <Text style={SettingsStyle.settingsText}>Settings Page:</Text>
                    <Text style={SettingsStyle.settingsText}>Version 0.0.1</Text>

                    <View style={SettingsStyle.bottomContainer}>

                        <Pressable style={SettingsStyle.backButtonContainer} onPress={this._setRenderFalse}>
                            <Ionicons name="return-down-back-outline" style={[SettingsStyle.backButton]}/>
                        </Pressable>

                        <Pressable style={SettingsStyle.clearButtons}>
                            <Text style={SettingsStyle.buttonContents}>Clear Data</Text>
                            <Ionicons name="remove-circle-outline" style={[SettingsStyle.buttonContents, SettingsStyle.cancelIcon]}/>
                        </Pressable>

                    </View>
                </View>
            );
        }
    }
}

export default SettingsPage;