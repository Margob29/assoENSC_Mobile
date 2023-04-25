import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import styles from "../../theme/styles";
import { Picker } from "@react-native-picker/picker";
import CalendarPicker from "react-native-calendar-picker";

//Formulaire de modification d'un club
export default function ClubUpdate(props) {
  const id = props.route.params.id;
  const [name, setName] = useState(props.route.params.name);
  const [description, setDescription] = useState(
    props.route.params.description
  );

  const handleUpdateClub = () => {
    // Modifier l'événement dans la base de données
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/GroupApi/${props.route.params.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          description,
        }),
      }
    )
      .then(() => {
        console.log("Club updated successfully");
        props.navigation.navigate("ClubsList");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.titleCardDetails}>{name}</Text>
          <Text style={styles.subtitle}>Prêt à modifier ton club ?</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.labelForm}>Nom du club</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.inputForm}
              value={name}
              onChangeText={(text) => setName(text)}
              multiline={true}
            />
          </View>
          <Text style={styles.labelForm}>Description du club</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.inputForm}
              value={description}
              onChangeText={(text) => setDescription(text)}
              multiline={true}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          {/* Bouton de modification d'un club */}
          <TouchableOpacity
            style={styles.validateButton}
            onPress={handleUpdateClub}
          >
            <Text style={styles.validateText}>Mettre à jour le club</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
