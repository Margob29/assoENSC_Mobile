import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import StudentCreation from "./screen/Students/StudentCreation";
import RootTabNavigator from "./navigation/RootTabNavigator";
import "react-native-gesture-handler";

export default App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RootTabNavigator"
          component={RootTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
