import { Button, StyleSheet, Text, View } from "react-native-web";

export default function HomeScreen({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.text}>Selecione a aula</Text>
      <Button title="Aula 1" onPress={() => navigation.navigate("Aula1")} />
      <Button title="Aula 2" onPress={() => navigation.navigate("Aula2")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
