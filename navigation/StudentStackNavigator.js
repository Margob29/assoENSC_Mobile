import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screen/Students/StudentScreen";
import StudentCreation from "../screen/Students/StudentCreation";

const StudentsStack = createNativeStackNavigator();

export default function StudentsStackNavigator() {
  return (
    <StudentsStack.Navigator independent={true} initialRouteName="StudentsList">
      <StudentsStack.Screen
        name="StudentsList"
        component={StudentScreen}
        options={{ title: "Elèves" }}
      />
      <StudentsStack.Screen
        options={{ headerShown: false }}
        name="StudentCreation"
        component={StudentCreation}
      />
    </StudentsStack.Navigator>
  );
}
