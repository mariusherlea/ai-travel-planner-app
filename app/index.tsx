import { Colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Login from "./../components/Login";
import { auth } from "./../configs/FireBaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View>
      <Image
        source={require("./../assets/images/pngwing.com.png")}
        style={{
          width: "100%",
          height: 350,
        }}
      />
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
        {user ? <Redirect href={"/(tabs)/mytrip"} /> : <Login />}
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
});
