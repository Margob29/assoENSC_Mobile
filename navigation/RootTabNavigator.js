import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import EventsStackNavigator from "./EventStackNavigator";
import ClubsStackNavigator from "./ClubStackNavigator";
import StudentsStackNavigator from "./StudentStackNavigator";
import styles from "../theme/styles";

const Nav = createBottomTabNavigator();

export default function RootTabNavigator(props) {
  const name = props.screenName;
  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor="#560067" />
      <Nav.Navigator
        style={styles.navbarStyle}
        screenOptions={({ route }) => ({
          tabAssoIcon: ({ focused, color, size }) => {
            const icons = {
              EventStack: "calendar-outline",
              ClubStack: "people-outline",
              StudentStack: "person-outline",
            };
            return (
              <Ionicons
                name={icons[route.name] || "ios-menu"}
                size={25}
                color={styles.navbarStyle}
              />
            );
          },
          headerShown: false,
        })}
      >
        <Nav.Screen
          name="EventStack"
          component={EventsStackNavigator}
          options={{ title: "Evènements" }}
        />
        <Nav.Screen
          name="ClubStack"
          component={ClubsStackNavigator}
          options={{ title: "Clubs" }}
        />
        <Nav.Screen
          name="StudentStack"
          component={StudentsStackNavigator}
          options={{ title: "Elèves" }}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
}
