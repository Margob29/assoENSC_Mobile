import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./screen/Home";
// import EventScreen from "./screen/Events/EventScreen";
import RootTabNavigator from "./navigation/RootTabNavigator";
import EventCreation from "./screen/events/EventCreation";

export default App = () => {
  //const Stack = createNativeStackNavigator();
  return (
    //<RootTabNavigator />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Home"
    //       component={Home}
    //     />
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="EventScreen"
    //       component={EventScreen}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <EventCreation />
  );
};
