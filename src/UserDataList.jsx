import React, { Component } from "react";
import { Text, View } from "react-native";
import DataListStyles from "./styles/DataListStyles";

//this class exports the data cards for the user. style this to manipulate how it actually shows.

class UserDataList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={DataListStyles.dataListContainer}>
                <Text style={DataListStyles.dataText}>
                    Date Logged:   {this.props.date}
                </Text>
                <Text style={DataListStyles.dataText}>
                    Title:   {this.props.title}
                </Text>
                <Text style={DataListStyles.dataText}>
                    Pain Rating:   {this.props.painRating}
                </Text>
            </View>
        );
    }
}

export default UserDataList;