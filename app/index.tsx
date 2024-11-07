import { Image, Text, View } from "react-native";
import Login from "../components/Login";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  return (
    <View>
      <Image
        source={require("../assets/images/KofferV3.png")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 28, fontFamily: "outfit-bold" }}>
          AI Travel Planner
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
  },
});
