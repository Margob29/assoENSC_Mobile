import { React, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../theme/styles";
import DeleteButton from "./DeleteButton";
import EventCard from "./EventCard";

export default function EventCardList(props) {
  return props.forEach((event) => {
    <EventCard event={event} />;
  });
}
