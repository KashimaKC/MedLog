import { Component } from "react";
import { View, Text, TextInput, TouchableHighlight, Alert, Pressable } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker"
import UserData from "./UserData";
import EntryStyles from "./styles/EntryStyles"
import Ionicons from "@expo/vector-icons/Ionicons"

class DataEntry extends Component {
    constructor(props) {
        super(props);

        let isRendered = true;
        let painScale = "1";
        let dateToLog = "";
        let notesToLog = "";
        this.state = { 
            painScale:painScale, 
            dateToLog:dateToLog, 
            notesToLog:notesToLog, 
            isRendered:isRendered 
        };
    }

    //resets states to default for new entry.
    _setRenderTrue = () => {
        this.setState({isRendered: true, painScale: "1", dateToLog: "", notesToLog: ""});
    }

    _setRenderFalse = () => {

        this.setState({isRendered: false});
    }

    _getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        
        //this.setState({dateToLog: today});
        return today;
    }

    //creating interaction with user data storage.
    _logResults = () => {

        this.props.refreshData;

        this.setState({dateToLog: this._getDate()}, () => {

            //set post request to server.
            fetch(`http://192.168.1.31/?POST/${this.state.dateToLog}/${this.state.painScale}/${this.state.notesToLog}`);

            Alert.alert('Log Successful!',
            `pain: ${this.state.painScale}\ndate: ${this.state.dateToLog} \nnotes: ${this.state.notesToLog}`);
        });

        this.setState({isRendered: false});
    }

    render() {

            if (this.state.isRendered == true) {
                return (

                <View style={EntryStyles.viewContainer}>
                    <Text style={EntryStyles.headerStyle}>Enter Log:</Text>
                    <Text style={EntryStyles.dateStyle}>Date: {this._getDate()}</Text>

                    <Text style={EntryStyles.dateStyle}>Enter Pain Scale: </Text>
                    <View style={EntryStyles.pickerContainer}>
                        <Picker selectedValue={this.state.painScale}
                                onValueChange={(painScale) => this.setState({painScale})}
                                style={EntryStyles.pickerStyle}>
                            <Picker.Item label={"1"} value="1"/>
                            <Picker.Item label={"2"} value="2"/>
                            <Picker.Item label={"3"} value="3"/>
                            <Picker.Item label={"4"} value="4"/>
                            <Picker.Item label={"5"} value="5"/>
                        </Picker>
                    </View>
                    <View style={EntryStyles.inputContainer}>
                        <TextInput
                            onChangeText={(notesToLog) => this.setState({notesToLog})}
                            value={this.state.notesToLog}
                            multiline={true}
                            style={EntryStyles.textInputStyle}
                            placeholder="Notes:">
                        </TextInput>
                    </View>

                    <View style={EntryStyles.bottomContainer}>
                        <TouchableHighlight onPress={this._logResults} style={EntryStyles.submitButtonStyle}>
                            <Text style={EntryStyles.submitButtonText}>Log Event</Text>
                        </TouchableHighlight>
                        <Pressable onPress={this._setRenderFalse}>
                            <Ionicons name="close-outline" style={EntryStyles.exitButton}/>
                        </Pressable>
                    </View>
                </View>

                );
            }
                
    }
}


export default DataEntry