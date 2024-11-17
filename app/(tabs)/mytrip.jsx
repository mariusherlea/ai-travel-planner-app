import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import StartNewTripCard from "../../components/Mytrips/StartNewTripCard";
import { Colors } from "@/constants/Colors";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
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
      {userTrips.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <View>
          <Text>You have no trips</Text>
        </View>
      )}
    </View>
  );
}
