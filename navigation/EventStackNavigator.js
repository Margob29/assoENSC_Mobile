import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventCreation from "../screen/Events/EventCreation";
import EventDetails from "../screen/Events/EventDetails";
import EventScreen from "../screen/Events/EventScreen";
import styles from "../theme/styles";

const EventsStack = createNativeStackNavigator();

const EventsStackNavigator = (props) => {
  const screenName = props.route.params?.screenName;
  if (screenName !== props.route.name) {
    props.navigation.navigate(screenName);
  }
  return (
    <EventsStack.Navigator
      independent={true}
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
        name="EventDetails"
        component={EventDetails}
      />
      <EventsStack.Screen name="EventDetails" component={EventDetails} />
      <EventsStack.Screen name="EventCreation" component={EventCreation} />
    </EventsStack.Navigator>
  );
};

export default EventsStackNavigator;
