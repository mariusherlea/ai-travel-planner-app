import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: "Sign In",
  //   });
  // }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 60,
      }}
    >
      <Text style={{ fontSize: 25 }}>Let's Sign You In</Text>
      <Text style={{ fontSize: 25, color: Colors.WHITE }}>Welcome back</Text>
      <Text style={{ fontSize: 25 }}>Let's Sign You In</Text>
    </View>
  );
}
