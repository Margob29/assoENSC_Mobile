import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../theme/styles";
import EventScreen from "../screen/Events/EventScreen";
import EventDetails from "../screen/Events/EventDetails";
import EventCreation from "../screen/Events/EventCreation";

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
      <EventsStack.Screen name="EventCreation" component={EventCreation} />
    </EventsStack.Navigator>
  );
};

export default EventsStackNavigator;
