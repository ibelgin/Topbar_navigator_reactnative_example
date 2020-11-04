import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";

import ChatScreen from "./screens/ChatScreen";
import CallScreen from "./screens/CallScreen";
import StatusScreen from "./screens/StatusScreen";

const Tab= createMaterialTopTabNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{activeTintColor:"#FFF",
      indicatorStyle:{backgroundColor:"#FFF"},
      style:{backgroundColor:"#108786"}
      }}>

        <Tab.Screen
        name="Chats"
        component={ChatScreen}/>

        <Tab.Screen
        name="Status"
        component={StatusScreen}/>

        <Tab.Screen
        name="Calls"
        component={CallScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}
