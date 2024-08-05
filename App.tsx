// entorno
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//componentes
import NavigationStack from "./src/navigation/Navigation"
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";


// main component
export default function App() : React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

// reglas de estilo para el main component
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
