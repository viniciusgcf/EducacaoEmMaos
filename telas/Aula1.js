import { Button, StyleSheet, Text, View } from "react-native-web";

export default function Aula1() {
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.text}>Aula 1</Text>
      <Button title="Aula 1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
