import React  from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

type FuntionAnonymous = (id:string)=>void;
type Navigation = {
    navigate:FuntionAnonymous;
}
type Props = {
    navigation: Navigation;
}

export default function HomeScreen(props:Props){
    const { navigation } = props;
    const goToSettings = ()=> {navigation.navigate("Settings");}
    return (
        <SafeAreaView>
            <Text>Estamos en home Screen</Text>
            <Text>Estamos en home Screen</Text>
            <Text>Estamos en home Screen</Text>
            <Text>Estamos en home Screen</Text>
            <Text>Estamos en home Screen</Text>
            <Button title="Ir a Ajustes" onPress={goToSettings} />
        </SafeAreaView>
    );
}