import { Button, StyleSheet, Text, View } from "react-native-web";
  import videoAula from "../assets/videoAula.mp4";

  export default function Aula1() {
    render();
    {
      return <View style={StyleSheet.container}></View>;
    }
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
