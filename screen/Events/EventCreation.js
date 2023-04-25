import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import { Picker } from "@react-native-picker/picker";

export default function EventCreation(props) {
  const [club, setClub] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clubsList, setClubsList] = useState([]);

  const handleAddEvent = () => {
    const date = new Date();
    // Ajouter un nouvel événement à la base de données
    fetch(`https://enscmobilebureau.azurewebsites.net/api/EventApi`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        name,
        description,
        groupId: club,
      }),
    })
      .then(() => {
        console.log("Event added successfully");
        props.navigation.navigate("EventsList");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetch("https://enscmobilebureau.azurewebsites.net/api/GroupApi/GetGroups")
    // Accès au contenu JSON de la réponse
    .then((response) => response.json())
    .then((content) => {
      setClubsList(content);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.titleCardDetails}>Créez votre évènement ! </Text>
        <Text style={styles.subtitle}>Prêt à faire kiffer ton école ?</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.labelForm}>Club créateur de l'évènement</Text>
        <Picker
          style={styles.inputForm}
          onValueChange={(value) => setClub(value)}
        >
          {clubsList.map((event) => {
            return <Picker.Item label={event.name} value={event.id} />;
          })}
        </Picker>
        <Text style={styles.labelForm}>Nom de l'évènement</Text>
        <TextInput
          style={styles.inputForm}
          value={name}
          onChangeText={(text) => setName(text)}
          multiline={true}
        />
        <Text style={styles.labelForm}>Description de l'évènement</Text>
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
        <TouchableOpacity
          style={styles.validateButton}
          onPress={handleAddEvent}
        >
          <Text style={styles.validateText}>Ajouter l'évènement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// items={eventsList.map((item) => ({ label: item.name, value: item.id }))}
