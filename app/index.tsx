import { Colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <Image
        source={require("./../assets/images/pngwing.com.png")}
        style={{
          width: "100%",
          height: 350,
        }}
      ></Image>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Ai Travel Planner.
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: Colors.GREY,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips.Travel smarter with AI-driven insights.
        </Text>
        <View style={styles.button}>
          <Text
            style={{ fontSize: 16, textAlign: "center", color: Colors.WHITE }}
          >
            Sign In with Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    marginTop: "20%",
  },
});
