import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const router = useRouter();
  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 30, marginTop: 30 }}>Let's Sign You In</Text>
      <Text style={{ fontSize: 25, color: Colors.GREY, marginTop: 20 }}>
        Welcome back
      </Text>
      <Text style={{ fontSize: 30, color: Colors.GREY, marginTop: 10 }}>
        You've been missed
      </Text>
      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 50 }}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
      <View>
        {/* Sign In Button */}
        <View
          style={{
            padding: 15,
            marginTop: 50,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Sign In
          </Text>
        </View>
        {/* Create account Button */}
        <TouchableOpacity
          onPress={() => router.replace("auth/sign-up")}
          style={{
            padding: 15,
            marginTop: 20,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            borderWidth: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 15,
  },
});
