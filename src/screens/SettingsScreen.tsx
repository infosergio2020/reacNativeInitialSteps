import React  from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

type FuntionAnonymous = (id:string)=>void;
type Navigation = {
    navigate:FuntionAnonymous;
}
type Props = {
    navigation: Navigation;
}

export default function SettingScreen(props:Props){
    const { navigation } = props;
    const goToHome = (pageName:string)=> { navigation.navigate(pageName); }
    return (
        <SafeAreaView>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Button title="Ir a Home" onPress={()=>{goToHome("Home")}} />
        </SafeAreaView>
    );
}