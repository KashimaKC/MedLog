import React, { Component } from "react";
import { Pressable, Text, View, Alert } from "react-native";
import DataListStyles from "./styles/DataListStyles";
import USERDATA from "./UserData";
import Ionicons from "@expo/vector-icons/Ionicons"

//this class exports the data cards for the user. style this to manipulate how it actually shows.

class UserDataList extends Component {
    constructor(props) {
        super(props);

        let entryID;
        let isRendered = true;

        this.state = {
            entryID: entryID,
            isRendered: isRendered
        }
    }

    componentDidMount() {
        this.setState({entryID: this.props.id}, () => {

        });
    }

    discardEntry = () => {

        this.setState({isRendered: false})

    }

    render() {

        if (this.state.isRendered) {
            return (
                <View style={DataListStyles.dataListContainer}>
                    <View>
                        <Text style={DataListStyles.dataText}>
                            Date Logged:   {this.props.date}
                        </Text>
                        <Text style={DataListStyles.dataText}>
                            Notes:   {this.props.notes}
                        </Text>
                        <Text style={DataListStyles.dataText}>
                            Pain Rating:   {this.props.painRating}
                        </Text>
                        <Text>
                            key: {this.state.entryID}
                        </Text>
                    </View>
    
                    <View style={DataListStyles.optionsButtonContainer}>
                        <Pressable onPress={this.discardEntry}>
                            <Ionicons name="trash-bin-outline" style={DataListStyles.discardButton}/>
                        </Pressable>
                        <Pressable>
                            <Ionicons name="options-outline" style={DataListStyles.moreInfoButton}/>
                        </Pressable>
                    </View>
                </View>
            );
        }
    }
}

export default UserDataList;