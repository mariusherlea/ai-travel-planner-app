import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native";
import { selectTravelerList } from "./../../constants/Options";
import { OptionCard } from "./../../components/CreateTrip/OptionCard";

export default function SelectTraveler() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, marginTop: 20 }}>Who's traveling</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Choose your travelers</Text>
        <FlatList
          data={selectTravelerList}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
