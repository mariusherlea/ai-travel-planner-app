import React, { useContext } from "react";
import { ToastAndroid, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SelectDate() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  onDateChange = (date, type) => {
    console.log(date, type);
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select dates", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
    router.push("/create-trip/select-budget");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, padding: 20 }}>Travel dates</Text>
      <CalendarPicker
        onDateChange={this.onDateChange}
        allowRangeSelection={true}
        minDate={new Date()}
      />
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={onDateSelectContinue}
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.YELLOW,
    borderRadius: 15,
  },
});
