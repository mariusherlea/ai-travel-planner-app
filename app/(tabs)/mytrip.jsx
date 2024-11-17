import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 35 }}>My Trip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips.length > 0 ? (
        <View>
          <Text>You have no trips</Text>
        </View>
      ) : (
        <View>
          <Text>You have no trips</Text>
        </View>
      )}
    </View>
  );
}
