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
          {/* <Image style={styles.image} source={{ uri: props.url }}></Image> */}
        </View>
        <View style={styles.cardBottom}>
          <DeleteButton />
        </View>
      </View>
    </View>
  );
}
