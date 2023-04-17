import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../theme/styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function StudentScreen() {
  return (
    <View>
      <View>
        <View style={styles.cardContainer}>
          <View style={styles.titleCard}>
            <Text style={styles.title}>Bonjour</Text>
          </View>
          <Image
            style={styles.cardImage}
            source={require("../assets/interpromo.jpg")}
          />
          <Text style={styles.textDate}>01/07/2019</Text>
          <View style={styles.cardBottom}>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
