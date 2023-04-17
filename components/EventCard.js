import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../theme/styles";

export default function EventCard(props) {
const { name, id, onDelete } = props;

  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.titleCard}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={require("../assets/interpromo.jpg")}
        />
        <Text style={styles.textDate}>01/07/2019</Text>
        <View style={styles.cardBottom}>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
