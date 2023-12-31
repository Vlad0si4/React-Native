import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { RegisterScreen } from "./Screens/RegisterScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <RegisterScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
