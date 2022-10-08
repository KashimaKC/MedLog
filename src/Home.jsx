import React, { Component, useEffect } from "react";
import { Text, View, TouchableHighlight, FlatList, TouchableWithoutFeedback, Alert, RefreshControl } from "react-native";
import HomeStyles from "./styles/HomeStyles";
import FlatListStyle from "./styles/FlatListStyle";
//USERDATA not in use while trying to figure out how to query the web server.
import FlatListComp from "./FlatListComp";
import UserDataList from "./UserDataList";
import DataEntry from "./DataEntry";
import Ionicons from "@expo/vector-icons/Ionicons"
import SettingsPage from "./SettingsPage";

class Home extends Component {
    constructor(props) {
        super(props);

        let isPicking, isInSettings = "";
        this.changeChild = React.createRef();
        this.setChildRendered = React.createRef();
        let refresh = 0;

        let settingsComponent, pickingComponent;

        this.state = { 
            isPicking:isPicking,
            pickingComponent:pickingComponent,
            isInSettings: isInSettings,
            settingsComponent: settingsComponent,
            refresh: refresh,
            listData: []
        };

    }
    
    //refresh section
    //_______
    refreshData = () => {
        this._getListData();
    }
    //_______
    //end refresh

    componentDidMount() {
        this._getListData();
    }

    _getListData = () => {
        return fetch('http://192.168.1.31/?REQUEST')
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({listData: responseJSON});
                console.log(this.state.listData);
            })
            .catch(error => {
                console.error(error);
        });
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
                <Text style={HomeStyles.header}>MedLog</Text>

                <View style={HomeStyles.navBar}>

                    <TouchableHighlight onPress={this.refreshData}>
                        <Text>
                            Refresh
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={HomeStyles.logButton} onPress={this._displayPicker}>
                        <Text style={HomeStyles.buttonText}>
                            Log Event
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={HomeStyles.settingStyle} onPress={this._displaySettings}>
                        <Ionicons name="settings-sharp" style={HomeStyles.settingStyle}/>
                    </TouchableHighlight>
                    
                </View>
                
                {this.state.pickingComponent}
                {this.state.settingsComponent}

                <FlatListComp listData={this.state.listData} isRendered={true}/>
            </View>
        )
    }
    
}

export default Home;