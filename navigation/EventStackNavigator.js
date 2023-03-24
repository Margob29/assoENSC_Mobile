import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetails from "../screen/events/EventDetails";
import EventScreen from "../screen/EventScreen";

const EventsStack = createNativeStackNavigator();

export default function EventsStackNavigator() {
  return (
    <EventsStack.Navigator initialRouteName="EventsList">
      <EventsStack.Screen
        name="EventsList"
        component={EventScreen}
        options={{ title: "Evènements" }}
      />
      <EventsStack.Screen name="EventDetails" component={EventDetails} />
    </EventsStack.Navigator>
  );
}
