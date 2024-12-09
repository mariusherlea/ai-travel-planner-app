import { Colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
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
        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)/mytrip");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: Colors.WHITE,
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
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
