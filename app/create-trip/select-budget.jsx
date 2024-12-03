import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native";
import { selectBudgetList } from "./../../constants/Options";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const [SelectedBudget, setSelectedBudget] = useState();
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
      budget: SelectedBudget,
    });
  }, [SelectedBudget]);

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedBudget(item)}>
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
          SelectedBudget?.id == item?.id && { borderWidth: 3 },
        ]}
      >
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 20 }}>{item?.title}</Text>
          <Text style={{ fontSize: 17, color: Colors.GREY }}>{item?.desc}</Text>
          <Text style={{ fontSize: 17 }}>{item?.budget}</Text>
          <Text style={{ fontSize: 17 }}>{item?.people}</Text>
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
      <Text style={{ fontSize: 35, marginTop: 20 }}>Budget</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Choose spendig habits for your trip
        </Text>
        <FlatList
          data={selectBudgetList}
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
        <Link href={"/create-trip/review-trip"} style={{ textAlign: "center" }}>
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
