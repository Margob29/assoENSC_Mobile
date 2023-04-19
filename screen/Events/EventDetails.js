import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyle from "../../theme/styles";

export default function EventDetails(props) {
  const onDelete = props.route.params.onDelete;

  const id = props.route.params.id;
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    fetch("https://enscmobilebureau.azurewebsites.net/api/EventApi/" + id)
      // Accès au contenu JSON de la réponse
      .then((response) => response.json())
      .then((content) => {
        setEventDetails(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <ScrollView>
      <View style={globalStyle.container}>
        {eventDetails && (
          <>
            <View style={{ margin: 24 }}>
              <Text style={globalStyle.titleCardDetails}>
                {eventDetails.name}
              </Text>
              <Text style={globalStyle.date}>
                {new Date(eventDetails.date).toLocaleDateString(
                  "fr-FR",
                  options
                )}
              </Text>
            </View>

            <View style={globalStyle.description}>
              <Text style={globalStyle.descriptionTitle}>Description</Text>
              <Text>{eventDetails.description}</Text>

              <Text style={globalStyle.group}>{eventDetails.group.name}</Text>
            </View>

            <Image
              style={globalStyle.cardImage}
              source={require("../../assets/interpromo.jpg")}
            />
          </>
        )}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={globalStyle.deleteButton}
            onPress={() => {
              props.navigation.navigate("EventUpdate", {
                id: id,
                name: eventDetails.name,
                description: eventDetails.description,
                club: eventDetails.group.name,
                date: eventDetails.date,
              });
            }}
          >
            <Text style={globalStyle.deleteText}>Modifier</Text>
          </TouchableOpacity>
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
      </View>
    </ScrollView>
  );
}
