import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="ClubsList">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
    </HomeStack.Navigator>
  );
}
