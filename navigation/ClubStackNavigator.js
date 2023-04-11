import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClubScreen from "../screen/clubs/ClubScreen";
import ClubDetails from "../screen/clubs/ClubScreen";

const ClubsStack = createNativeStackNavigator();

export default function ClubsStackNavigator() {
  return (
    <ClubsStack.Navigator initialRouteName="ClubsList">
      <ClubsStack.Screen
        name="ClubsList"
        component={ClubScreen}
        options={{ title: "Clubs" }}
      />
      <ClubsStack.Screen name="ClubDetails" component={ClubDetails} />
    </ClubsStack.Navigator>
  );
}
