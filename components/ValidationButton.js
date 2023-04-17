import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../theme/styles";

export default function ValidationButton() {
  return (
    <View>
      <TouchableOpacity style={styles.validateButton}>
        <Text style={styles.validateText}>Ajouter l'évènement</Text>
      </TouchableOpacity>
    </View>
  );
}
