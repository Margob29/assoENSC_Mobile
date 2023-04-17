import { React, useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import EventCard from "../../components/EventCard";
import Ionicons from "react-native-vector-icons/Ionicons";

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
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          props.navigation.navigate("EventCreation");
        }}
      >
        <Ionicons name={"add-circle-outline"} size={80} color={"#560067"} />
      </TouchableOpacity>
      <FlatList
        data={eventsList}
        renderItem={({ item }) => <EventCard name={item.name} />} //onPress={props.navigation.push(EventCreation)} />}
      />
    </View>
  );
}
