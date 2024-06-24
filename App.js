import Menu from "./telas/Menu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="<Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
