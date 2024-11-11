import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

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
        height: "100%",
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text style={{ fontSize: 30 }}>Let's Sign You In</Text>
      <Text style={{ fontSize: 25, color: Colors.GREY, marginTop: 20 }}>
        Welcome back
      </Text>
      <Text style={{ fontSize: 30, color: Colors.GREY, marginTop: 10 }}>
        You've been missed
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
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
