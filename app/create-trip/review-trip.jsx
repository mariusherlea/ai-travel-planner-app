import { View, Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useContext } from "react";

import { CreateTripContext } from "@/context/CreateTripContext";

export default function reviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{ padding: 25, backgroundColor: Colors.WHITE, height: "100%" }}
    >
      <Text style={{ fontSize: 35, marginTop: 20 }}>Review your Trip</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 15 }}>
          Before generating your trip please review your selection
        </Text>
      </View>
      {/* Destination info */}
      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text>📍</Text>
          <Text style={{ color: Colors.GREY }}>Destination</Text>
          <Text>{tripData?.locationInfo?.name}</Text>
        </View>
      </View>
      {/* Traveler info */}
      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text>📍</Text>
          <Text style={{ color: Colors.GREY }}>Traveler</Text>
          <Text>{tripData?.traveler?.title}</Text>
          <Text>{tripData?.traveler?.people}</Text>
        </View>
      </View>

      {/* Date info */}
      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text>📍</Text>
          <Text style={{ color: Colors.GREY }}>Time interval</Text>
          <Text>
            {tripData?.startDate?.format("YYYY-MM-DD") || "Start date not set"}{" "}
            - {tripData?.endDate?.format("YYYY-MM-DD") || "End date not set"} (
            {tripData?.totalNoOfDays} days)
          </Text>
        </View>
      </View>
      {/* Budget info */}
      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text>📍</Text>
          <Text style={{ color: Colors.GREY }}>Budget</Text>
          <Text>{tripData?.budget?.title}</Text>
          <Text>{tripData?.budget?.budget}</Text>
        </View>
      </View>
    </View>
  );
}
