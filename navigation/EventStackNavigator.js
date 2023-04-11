import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetails from "../screen/events/EventDetails";
import EventScreen from "../screen/events/EventScreen";
import styles from "../theme/styles";

const EventsStack = createNativeStackNavigator();

const EventsStackNavigator = () => {
  return (
    <EventsStack.Navigator
      initialRouteName="EventsList"
      screenOptions={styles.pageTitle}
    >
      <EventsStack.Screen
        name="EventsList"
        component={EventScreen}
        options={{ title: "Evènements" }}
      />
      <EventsStack.Screen name="EventDetails" component={EventDetails} />
    </EventsStack.Navigator>
  );
};

export default EventsStackNavigator;
