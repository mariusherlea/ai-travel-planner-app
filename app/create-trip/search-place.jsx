import { View, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function searchPlace() {
  uuidv4();
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);
  useEffect(() => {
    console.log(tripData);
  }, [tripData]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onFail={(error) => console.error(error)}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          console.log(details?.geometry?.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry?.location,
              photo_reference: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.GOOGLE_MAP_API_KEY,
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
            marginTop: 20,
          },
          textInput: {
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 10,
            paddingHorizontal: 15,
            fontSize: 16,
          },
          textInputContainer: {
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 10,
            paddingHorizontal: 15,
            fontSize: 16,
            borderWidth: 1,
          },
        }}
      />
    </View>
  );
}
