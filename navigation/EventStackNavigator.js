import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetails from "../screen/Events/EventDetails";
import EventScreen from "../screen/Events/EventScreen";
import styles from "../theme/styles";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";

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
      <EventsStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <EventsStack.Screen name="EventDetails" component={EventDetails} />
    </EventsStack.Navigator>
  );
};

export default EventsStackNavigator;
