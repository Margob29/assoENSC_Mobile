import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../theme/styles";
import DeleteButton from "./DeleteButton";

export default function EventCard(props) {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.titleCard}>
          <Text style={styles.title}>Interpromo</Text>
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
