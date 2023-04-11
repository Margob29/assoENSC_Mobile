import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screen/StudentScreen";

const StudentsStack = createNativeStackNavigator();

export default function StudentsStackNavigator() {
  return (
    <StudentsStack.Navigator initialRouteName="StudentsList">
      <StudentsStack.Screen
        name="StudentsList"
        component={StudentScreen}
        options={{ title: "Elèves" }}
      />
    </StudentsStack.Navigator>
  );
}
