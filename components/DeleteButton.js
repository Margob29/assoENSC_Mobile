import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../theme/styles";

export default function DeleteButton() {
  return (
    <View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
}
