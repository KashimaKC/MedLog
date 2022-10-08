import React, { Component } from "react";
import { Text, View, TouchableHighlight, FlatList, TouchableWithoutFeedback, Button } from "react-native";
import FlatListStyle from "./styles/FlatListStyle";
import UserDataList from "./UserDataList";


//this component renders the flatlist.

class FlatListComp extends Component {
    constructor(props) {
        super(props);

 
    }

    _renderItem = ({ item }) => {

        return (
            <UserDataList
             notes={item.notes}
             date={item.date} 
             painRating={item.painRating} 
             id={item.id}
             isRendered={this.props.isRendered}
            />
        );
    }

    render() {
        
        return(
            <View>
                <TouchableWithoutFeedback style={FlatListStyle.listContainer}>
                    <FlatList 
                        data={this.props.listData} 
                        renderItem={this._renderItem} 
                        keyExtractor={item => item.id}
                        extraData={this.props}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default FlatListComp;