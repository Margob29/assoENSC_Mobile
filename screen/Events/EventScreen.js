import { React, useState } from "react";
import { Text, View, Button, FlatList } from "react-native";
import styles from "../../theme/styles";
import EventCard from "../../components/EventCard";
import AddButton from "../../components/AddButton";

export default function EventScreen(props) {
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

  return (
    <View>
      <AddButton />
      <FlatList
        data={eventsList}
        renderItem={({ item }) => <EventCard name={item.name}/>} //onPress={props.navigation.push(EventCreation)} />}
      />
    </View>
  );
}
