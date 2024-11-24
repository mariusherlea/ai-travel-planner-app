import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

export default class App extends Component {
  onDateChange(date, type) {
    console.log(date, type);
  }
  render() {
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
}

const onDateSelectContinue = () => {
  console.log("continue");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.YELLOW,
    marginTop: 5,
    borderRadius: 15,
  },
});
