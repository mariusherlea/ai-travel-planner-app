import React, { useContext } from "react";
import { ToastAndroid, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectDate() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

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
        {/* <Link
            href={"/create-trip/select-dates"}
            style={{ textAlign: "center" }}
          > */}
        <Text
          style={{
            justifyContent: "center",
            color: Colors.WHITE,
            alignContent: "center",
          }}
        >
          Continue
        </Text>
        {/* </Link> */}
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
