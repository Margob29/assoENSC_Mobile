import { React, useState, useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import EventCard from "../../components/EventCard";
import Ionicons from "react-native-vector-icons/Ionicons";

//Affichage de tous les évènements disponibles
export default function EventScreen(props) {
  const [eventsList, setEventsList] = useState([]);
  useEffect(() => {
    //Récupère tous les évènements de la base de données
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
      {/* Bouton d'ajout d'évènements */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons
          name={"add-outline"}
          size={80}
          color={"#fff"}
          onPress={() => props.navigation.navigate("EventCreation")}
        />
      </TouchableOpacity>
      {/* Cartes des évènements existants */}
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
              date={item.date}
              onDelete={() => handleDeleteEvent(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
