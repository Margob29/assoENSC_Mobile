import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../theme/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddButton() {
  return (
    <View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name={"add-circle-outline"} size={80} color={"#560067"} />
      </TouchableOpacity>
    </View>
  );
}
