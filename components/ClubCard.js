import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../theme/styles";

export default function ClubCard(props) {
  const { name, id, description, onDelete } = props;
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
        <View>
          <Text>Description</Text>
          <Text>{description}</Text>
        </View>
        <View>
          <Text>Président : </Text>
          <Text>Nombre de membres : </Text>
        </View>
        <View style={styles.cardBottom}>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
