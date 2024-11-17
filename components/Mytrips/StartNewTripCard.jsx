import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 25,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{ fontSize: 25 }}>No Trips planned yet</Text>
      <Text style={{ fontSize: 15, textAlign: "center", color: Colors.GREY }}>
        Look like its time to plan a new travel experience! Get started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: "black",
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ color: Colors.WHITE }}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  );
}
