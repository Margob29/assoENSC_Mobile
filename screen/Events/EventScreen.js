import { React, useState, useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import EventCard from "../../components/EventCard";

export default function EventScreen(props) {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetch("https://enscmobilebureau.azurewebsites.net/api/EventApi")
      // Accès au contenu JSON de la réponse
      .then((response) => response.json())
      .then((content) => {
        setEventsList(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [eventsList]);

  const handleDeleteEvent = (eventId) => {
    // Supprimer l'événement de la base de données
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/EventApi/${eventId}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        console.log("Event deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <FlatList
        data={eventsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("EventDetails", {
                id: item.id,
                onDelete: () => handleDeleteEvent(item.id),
              });
            }}
          >
            <EventCard
              root={props.navigation}
              name={item.name}
              id={item.id}
              onDelete={() => handleDeleteEvent(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
