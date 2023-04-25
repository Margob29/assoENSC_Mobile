import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import EventStackNavigator from "./EventStackNavigator";
import ClubStackNavigator from "./ClubStackNavigator";
import StudentStackNavigator from "./StudentStackNavigator";
import styles from "../theme/styles";
import { useEffect } from "react";

const Nav = createBottomTabNavigator();
export let start = 0;

// Cette fonction permet la navigation via la navbar en bas de l'écran (navigation entre clubs, events et students)
export default function RootTabNavigator(props) {
  const name = props.route.params.screenName;
  screenName =
    name == "EventStackNavigator"
      ? "EventStack"
      : name == "ClubStackNavigator"
      ? "ClubStack"
      : "StudentStack";

  useEffect(() => {
    if (screenName !== "EventStack" && name !== "EventStack") {
      start = 1;
    }
  }, [screenName]);

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
          component={ClubStackNavigator}
          options={{ title: "Clubs" }}
        />
        <Nav.Screen
          name="StudentStack"
          component={StudentStackNavigator}
          options={{ title: "Elèves" }}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
}
