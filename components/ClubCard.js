import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../theme/styles";

// Carte pour afficher chaque club
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
          <Text style={[styles.textDate, { textAlign: "center" }]}>
            Description
          </Text>
          <Text style={{ textAlign: "center", padding: 25 }}>
            {description}
          </Text>
        </View>
        <View style={styles.cardBottom}>
          {/* Lorsqu'on clique sur supprimer cela appelle la fonction onDelete située dans ClubScreen */}
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
