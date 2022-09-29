import React, { Component } from "react";
import { Text, View, TextInput, Image, ImageBackground, Pressable, Alert, FlatList } from "react-native";
import HomeStyles from "./styles/HomeStyles"
import USERDATA  from "./UserData";
import UserDataList from "./UserDataList";
import DataEntry from "./DataEntry";
import Ionicons from "@expo/vector-icons/Ionicons"
import SettingsPage from "./SettingsPage";

class Home extends Component {
    constructor(props) {
        super(props);

        let isPicking = "";
        let isInSettings = "";

        this.changeChild = React.createRef();

        let pickingComponent;
        let settingsComponent;
        this.state = { 
            isPicking:isPicking,
            pickingComponent:pickingComponent,
            isInSettings: isInSettings,
            settingsComponent: settingsComponent
        };
    }

    _renderItem = ({ item }) => {
        return (
            <UserDataList title={item.title} date={item.date} painRating={item.painRating} />
        );
    }

    //alternates the state of which the log event component is rendered.
    //isPicking must be true for the parent and for the child isRendered must be true to show.
    _displayPicker = () => {

        this.setState({isPicking: "true"}, () => {
            if (this.state.isPicking == "true") {

                //mwah this is perfection thank god. please reference this again!
                this.setState({pickingComponent: <DataEntry ref={this.changeChild}/>}, () => {
                    this.changeChild.current._setRenderTrue();
                }); 
            }
        });
    }

    _displaySettings = () => {

        this.setState({isInSettings: "true"}, () => {
            if (this.state.isInSettings == "true") {

                this.setState({settingsComponent: <SettingsPage />}, () => {

                });
            }
        });
    }

    render () {
        return (
            <View style={HomeStyles.container}>
                <Text style={HomeStyles.header}>MedLog v0.0.0</Text>

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

                <FlatList data={USERDATA} renderItem={this._renderItem} />
            </View>
        )
    }
    
}

export default Home;