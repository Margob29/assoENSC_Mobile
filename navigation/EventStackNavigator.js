import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventCreation from "../screen/Events/EventCreation";
import EventDetails from "../screen/Events/EventDetails";
import EventScreen from "../screen/Events/EventScreen";
import EventUpdate from "../screen/Events/EventUpdate";
import ClubDetails from "../screen/Clubs/ClubDetails";
import styles from "../theme/styles";
import { start } from "./RootTabNavigator";

const EventsStack = createNativeStackNavigator();

// Cette fonction permet la navigation entre les différentes pages d'évènements (création, détails...)
const EventsStackNavigator = (props) => {
  const screenName = props.route.params?.screenName;

  // Condition pour pouvoit naviguer dans les évènements si ce n'est pas le choix de la page d'accueil
  if (screenName !== props.route.name && start !== 1) {
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
      <EventsStack.Screen
        options={{ headerShown: false }}
        name="EventCreation"
        component={EventCreation}
      />
      <EventsStack.Screen name="EventUpdate" component={EventUpdate} />
      <EventsStack.Screen name="ClubDetails" component={ClubDetails} />
    </EventsStack.Navigator>
  );
};

export default EventsStackNavigator;
