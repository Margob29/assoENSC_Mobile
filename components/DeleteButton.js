import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../theme/styles";

export default function DeleteButton(id) {
  const Delete = (eventId) => {
    // Supprimer l'événement de la base de données
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/EventApi/${eventId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Event deleted successfully");
        // Créer une nouvelle liste d'événements sans l'événement supprimé
        const updatedEventsList = eventsList.filter(
          (event) => event.id !== eventId
        );
        // Mettre à jour l'état avec la nouvelle liste d'événements
        setEventsList(updatedEventsList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      
    </View>
  );
}
