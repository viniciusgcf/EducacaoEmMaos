import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./telas/Menu";
import Aula1 from "./telas/Aula1";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Aula1" component={Aula1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
