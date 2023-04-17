import { React, useState, useEffect } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import ClubCard from "../../components/ClubCard";

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
