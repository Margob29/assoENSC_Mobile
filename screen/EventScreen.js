import { React, useState } from "react";
import { Text, View, Button } from "react-native";
import EventCardList from "../components/EventCardList";
import styles from "../theme/styles";

export default function EventScreen() {
  const [eventsList, setEventsList] = useState([]);
  fetch("https://enscmobilebureau.azurewebsites.net/api/EventApi")
    // Accès au contenu JSON de la réponse
    .then((response) => response.json())
    .then((content) => {
      setEventsList(content);
    })
    .catch((error) => {
      console.error(error);
    });
  return <EventCardList eventsList={eventsList} />;
}
