import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./../screens/HomeScreen";
import SettingScreen from "./../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
export default function Navigation(){
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    );
}