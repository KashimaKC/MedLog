import React, { Component, useEffect } from "react";
import { Text, View, Pressable, FlatList, TouchableWithoutFeedback, Alert } from "react-native";
import HomeStyles from "./styles/HomeStyles";
import FlatListStyle from "./styles/FlatListStyle";
import USERDATA  from "./UserData";
import UserDataList from "./UserDataList";
import DataEntry from "./DataEntry";
import Ionicons from "@expo/vector-icons/Ionicons"
import SettingsPage from "./SettingsPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home extends Component {
    constructor(props) {
        super(props);

        let isPicking = "";
        let isInSettings = "";
        //let STORAGE_KEY = '@KEY';

        this.changeChild = React.createRef();
        this.setChildRendered = React.createRef();

        let refresh = false;
        let pickingComponent;
        let settingsComponent;
        this.state = { 
            isPicking:isPicking,
            pickingComponent:pickingComponent,
            isInSettings: isInSettings,
            settingsComponent: settingsComponent,
            refresh: refresh
        };
    }

    _renderItem = ({ item }) => {

        return (
            <UserDataList
             notes={item.notes}
             date={item.date} 
             painRating={item.painRating} 
             id={item.id}
            />
        );
    }


    //alternates the state of which the log event component is rendered.
    //isPicking must be true for the parent and for the child isRendered must be true to show.
    _displayPicker = () => {

        this.setState({isPicking: "true"}, () => {
            if (this.state.isPicking == "true") {

                //mwah this is perfection thank god. please reference this again!
                this.setState({pickingComponent: <DataEntry ref={this.changeChild} />}, () => {
                    this.changeChild.current._setRenderTrue();
                }); 
            }
        });
    }

    //same functionality as the _displayPicker function but for settings :)
    _displaySettings = () => {

        this.setState({isInSettings: "true"}, () => {
            if (this.state.isInSettings == "true") {

                this.setState({settingsComponent: <SettingsPage ref={this.setChildRendered}/>}, () => {
                    this.setChildRendered.current._setRenderTrue();
                });
            }
        });
    }

    render () {
        return (
            <View style={HomeStyles.container}>
                <Text style={HomeStyles.header}>MedLog v0.0.1</Text>

                <View style={HomeStyles.navBar}>

                    <Pressable style={HomeStyles.logButton} onPress={this._displayPicker}>
                        <Text style={HomeStyles.buttonText}>
                            Log Event
                        </Text>
                    </Pressable>
                    <Pressable style={HomeStyles.settingStyle} onPress={this._displaySettings}>
                        <Ionicons name="settings-sharp" style={HomeStyles.settingStyle}/>
                    </Pressable>
                    
                </View>
                
                {this.state.pickingComponent}
                {this.state.settingsComponent}
                <TouchableWithoutFeedback style={FlatListStyle.listContainer}>
                    <FlatList 
                        data={USERDATA} 
                        renderItem={this._renderItem} 
                        keyExtractor={item => item.id}
                        extraData={this.state.refresh}/>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    
}

export default Home;