import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EventCard from "../components/EventCard";
import EventCardList from "../components/EventCardList";
import EventScreen from "../screen/EventScreen";
import { useState } from "react";

export default function RootTabNavigator() {
  //y'a une erreur ici va savoir pourquoi
  return <EventScreen />;
}
