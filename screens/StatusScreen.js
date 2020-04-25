import React from "react";
import {View,Text} from "react-native";

export default class StatusScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text> Hi This is Status Screen </Text>
            </View>
        );
    }
}