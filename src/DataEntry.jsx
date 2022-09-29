import { Component } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker"
import EntryStyles from "./styles/EntryStyles"

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

    _setRenderTrue = () => {
        this.setState({isRendered: true});
    }

    _getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        
        //this.setState({dateToLog: today});
        return today;
    }

    _logResults = () => {
        this.setState({dateToLog: this._getDate()}, () => {
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
                    <Text>Date: {this._getDate()}</Text>

                    <Text>Enter Pain Scale: </Text>
                    <Picker selectedValue={this.state.painScale}
                            onValueChange={(painScale) => this.setState({painScale})}
                            style={EntryStyles.pickerStyle}>
                        <Picker.Item label={"1"} value="1"/>
                        <Picker.Item label={"2"} value="2"/>
                        <Picker.Item label={"3"} value="3"/>
                        <Picker.Item label={"4"} value="4"/>
                        <Picker.Item label={"5"} value="5"/>
                    </Picker>

                    <TextInput
                        onChangeText={(notesToLog) => this.setState({notesToLog})}
                        value={this.state.notesToLog}
                        placeholder="Notes:">
                    </TextInput>

                    <Pressable onPress={this._logResults} style={EntryStyles.submitButtonStyle}>
                        <Text style={EntryStyles.submitButtonText}>Log Event</Text>
                    </Pressable>
                </View>

                );
            }
                
    }
}


export default DataEntry