import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import EventStackNavigator from "./EventStackNavigator";
import ClubStackNavigator from "./ClubStackNavigator";
import StudentStackNavigator from "./StudentStackNavigator";
import styles from "../theme/styles";

const Nav = createBottomTabNavigator();

export default function RootTabNavigator(props) {
  const name = props.route.params.screenName;
  screenName =
    name == "EventStackNavigator"
      ? "EventStack"
      : name == "ClubStackNavigator"
      ? "ClubStack"
      : "StudentStack";

  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor="#560067" />
      <Nav.Navigator
        style={styles.navbarStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              EventStack: "calendar-outline",
              ClubStack: "people-outline",
              StudentStack: "person-outline",
            };
            return (
              <Ionicons
                name={icons[route.name] || "ios-menu"}
                size={25}
                color={color}
              />
            );
          },
          headerShown: false,
        })}
      >
        <Nav.Screen
          name="EventStack"
          component={EventStackNavigator}
          initialParams={{ screenName: screenName }}
          options={{ title: "Evènements" }}
        />
        <Nav.Screen
          name="ClubStack"
          initialParams={{ screenName: screenName }}
          component={ClubStackNavigator}
          options={{ title: "Clubs" }}
        />
        <Nav.Screen
          name="StudentStack"
          initialParams={{ screenName: screenName }}
          component={StudentStackNavigator}
          options={{ title: "Elèves" }}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
}
