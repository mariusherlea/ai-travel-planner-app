import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native";
import { selectTravelerList } from "./../../constants/Options";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [SelectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: SelectedTraveler,
    });
  }, [SelectedTraveler]);

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedTraveler(item)}>
      <View
        style={[
          {
            padding: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: Colors.YELLOW,
            marginBottom: 10,
            marginTop: 5,
            borderRadius: 15,
          },
          SelectedTraveler?.id == item?.id && { borderWidth: 3 },
        ]}
      >
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 20 }}>{item?.title}</Text>
          <Text style={{ fontSize: 17, color: Colors.GREY }}>{item?.desc}</Text>
        </View>
        <Text style={{ fontSize: 40 }}>{item?.icon}</Text>
      </View>
    </TouchableOpacity>
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
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link
          href={"/create-trip/select-dates"}
          style={{ textAlign: "center" }}
        >
          <Text
            style={{
              justifyContent: "center",
              color: Colors.WHITE,
              alignContent: "center",
            }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
