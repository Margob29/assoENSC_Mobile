import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClubScreen from "../screen/Clubs/ClubScreen";
import ClubDetails from "../screen/Clubs/ClubDetails";
import ClubUpdate from "../screen/Clubs/ClubUpdate";
import ClubCreation from "../screen/Clubs/ClubCreation";
import EventDetails from "../screen/Events/EventDetails";

const ClubsStack = createNativeStackNavigator();

// Cette fonction permet la navigation entre les différentes pages de clubs (création, détails...)
export default function ClubsStackNavigator() {
  return (
    <ClubsStack.Navigator independent={true} initialRouteName="ClubsList">
      <ClubsStack.Screen
        name="ClubsList"
        component={ClubScreen}
        options={{ title: "Clubs" }}
      />
      <ClubsStack.Screen name="ClubDetails" component={ClubDetails} />
      <ClubsStack.Screen name="ClubUpdate" component={ClubUpdate} />
      <ClubsStack.Screen name="ClubCreation" component={ClubCreation} />
      <ClubsStack.Screen name="EventDetails" component={EventDetails} />
    </ClubsStack.Navigator>
  );
}
