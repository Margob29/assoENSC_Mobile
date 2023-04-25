import { React, useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import globalStyle from "../../theme/styles";
import EventCard from "../../components/EventCard";

// Affichage des détails d'un club
export default function ClubDetails(props) {
  const onDelete = props.route.params.onDelete;
  const id = props.route.params.id;
  const [clubDetails, setClubDetails] = useState(null);
  const [eventsList, setEventsList] = useState({});

  useEffect(() => {
    //Récupère tous les évènements associés à ce club
    fetch("https://enscmobilebureau.azurewebsites.net/api/GroupApi/" + id)
      // Accès au contenu JSON de la réponse
      .then((response) => response.json())
      .then((content) => {
        setClubDetails(content);
        setEventsList(content.events);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={globalStyle.container}>
      {clubDetails && (
        <>
          <View style={{ margin: 24 }}>
            <Text style={globalStyle.titleCardDetails}>{clubDetails.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {/* Bouton de modification d'un club */}
            <TouchableOpacity
              style={globalStyle.deleteButton}
              onPress={() => {
                props.navigation.navigate("ClubUpdate", {
                  id: id,
                  name: clubDetails.name,
                  description: clubDetails.description,
                });
              }}
            >
              <Text style={globalStyle.deleteText}>Modifier</Text>
            </TouchableOpacity>
            {/* Bouton de suppression d'un club */}
            <TouchableOpacity
              style={globalStyle.deleteButton}
              onPress={() => {
                onDelete();
                props.navigation.goBack();
              }}
            >
              <Text style={globalStyle.deleteText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.description}>
            <Text style={globalStyle.descriptionTitle}>Description</Text>
            <Text>{clubDetails.description}</Text>
          </View>
          {/* Affichage des évènements créés par le club et possibilité d'aller voir le détail de ces évènements */}
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
        </>
      )}
    </View>
  );
}
