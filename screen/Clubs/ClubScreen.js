import { React, useState, useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import ClubCard from "../../components/ClubCard";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ClubScreen(props) {
  const [clubList, setClubsList] = useState([]);

  useEffect(() => {
    fetch("https://enscmobilebureau.azurewebsites.net/api/GroupApi/GetGroups")
      // Accès au contenu JSON de la réponse
      .then((response) => response.json())
      .then((content) => {
        setClubsList(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [clubList]);

  const handleDeleteClub = (clubId) => {
    // Supprimer l'événement de la base de données
    fetch(`https://enscmobilebureau.azurewebsites.net/api/GroupApi/${clubId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Club deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons
          name={"add-circle-outline"}
          size={80}
          color={"#560067"}
          onPress={() => props.navigation.navigate("ClubCreation")}
        />
      </TouchableOpacity>
      <FlatList
        data={clubList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ClubDetails", {
                id: item.id,
                onDelete: () => handleDeleteClub(item.id),
              });
            }}
          >
            <ClubCard
              root={props.navigation}
              name={item.name}
              id={item.id}
              description={item.description}
              onDelete={() => handleDeleteClub(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
