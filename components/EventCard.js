import { React, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../theme/styles";
import DeleteButton from "./DeleteButton";

export default function EventCard(props) {
  // const [Name, setName] = useState("");
  // fetch("https://enscmobilebureau.azurewebsites.net/api/EventApi")
  //   // Accès au contenu JSON de la réponse
  //   .then((response) => response.json())
  //   .then((content) => {
  //     setName(content[0].name);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.titleCard}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={require("../assets/interpromo.jpg")}
        ></Image>
        <Text style={styles.textDate}>01/07/2019</Text>
        <View style={styles.cardBottom}>
          <DeleteButton />
        </View>
      </View>
    </View>
  );
}
