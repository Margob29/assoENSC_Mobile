import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      {eventDetails && (
        <>
          <View style={{ margin: 32 }}>
            <Text style={styles.title}>{eventDetails.name}</Text>
            <Text style={styles.date}>
              {new Date(eventDetails.date).toLocaleDateString("fr-FR", options)}
            </Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text>{eventDetails.description}</Text>

            <Text style={styles.group}>{eventDetails.group.name}</Text>
          </View>

          <Image
            style={styles.cardImage}
            source={require("../../assets/interpromo.jpg")}
          />
          <TouchableOpacity
            style={globalStyle.deleteButton}
            onPress={() => {
              onDelete();
              props.navigation.goBack();
            }}
          >
            <Text style={globalStyle.deleteText}>Supprimer</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#560067",
  },
  date: {
    fontSize: 24,
    textAlign: "center",
    fontStyle: "italic",
    color: "grey",
  },
  descriptionTitle: {
    margin: 16,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#560067",
  },
  description: {
    margin: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    width: "90%",
    height: "33%",
  },
  group: {
    textAlign: "center",
    borderColor: "green",
    color: "green",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    width: "25%",
  },
  cardImage: {
    height: 200,
    width: "90%",
    margin: 15,
  },
});
