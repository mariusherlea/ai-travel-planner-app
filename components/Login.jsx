import { Colors } from "@/constants/Colors";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/sign-in")}
      >
        <Text
          style={{ fontSize: 16, textAlign: "center", color: Colors.WHITE }}
        >
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    marginTop: "20%",
  },
});
