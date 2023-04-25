import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "../screen/Students/StudentScreen";
import StudentCreation from "../screen/Students/StudentCreation";
import StudentUpdate from "../screen/Students/StudentUpdate";

const StudentsStack = createNativeStackNavigator();

// Cette fonction permet la navigation entre les différentes pages d'élèves (création, modification...)
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
      <StudentsStack.Screen
        options={{ headerShown: false }}
        name="StudentUpdate"
        component={StudentUpdate}
      />
    </StudentsStack.Navigator>
  );
}
