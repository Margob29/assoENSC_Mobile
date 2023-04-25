import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";

// Formulaire de création des clubs
export default function ClubCreation(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClub = () => {
    const date = new Date();
    // Ajouter un nouveau club à la base de données
    fetch(`https://enscmobilebureau.azurewebsites.net/api/GroupApi`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then(() => {
        console.log("Club added successfully");
        props.navigation.navigate("ClubsList");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.titleCardDetails}>Créez votre club ! </Text>
        <Text style={styles.subtitle}>Prêt à faire kiffer ton école ?</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.labelForm}>Nom du club</Text>
        <TextInput
          style={styles.inputForm}
          value={name}
          onChangeText={(text) => setName(text)}
          multiline={true}
        />
        <Text style={styles.labelForm}>Description du club</Text>
        <TextInput
          style={styles.inputForm}
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {/* Bouton d'ajout de club */}
        <TouchableOpacity style={styles.validateButton} onPress={handleAddClub}>
          <Text style={styles.validateText}>Ajouter le club</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
