import { React, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../theme/styles";
import DeleteButton from "./DeleteButton";

export default function EventCard(props) {
  const deleteEvent = () => {
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/EventApi/${props.id}`,
      {
        method: "DELETE",
      }
    ).then(console.log("c'est fait"));
  };

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
          <DeleteButton onPress={deleteEvent} />
        </View>
      </View>
    </View>
  );
}
