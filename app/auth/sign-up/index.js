import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
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
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, paddingTop: 40 }}>Create New Account</Text>
      {/* User Full Name */}
      <View style={{ marginTop: 50 }}>
        <Text>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />
      </View>
      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
      <View>
        {/* Create account Button */}
        <View
          style={{
            padding: 15,
            marginTop: 50,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
            Create Account
          </Text>
        </View>
        {/* Create account Button */}
        <TouchableOpacity
          onPress={() => router.replace("auth/sign-in")}
          style={{
            padding: 15,
            marginTop: 20,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            borderWidth: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Sign In</Text>
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
