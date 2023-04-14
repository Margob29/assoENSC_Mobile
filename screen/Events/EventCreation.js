import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../../theme/styles";
import ValidationButton from "../../components/ValidationButton";
import { Picker } from "@react-native-picker/picker";

export default function EventCreation() {
  const [inputValue, setInputValue] = useState("");
  const [club, setClub] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [eventsList, setEventsList] = useState([]);
  fetch("https://enscmobilebureau.azurewebsites.net/api/GroupApi/GetGroups")
    // Accès au contenu JSON de la réponse
    .then((response) => response.json())
    .then((content) => {
      setEventsList(content);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleForm}>Créez votre évènement ! </Text>
      <Text style={styles.catchyWordsForm}>
        Prêt à faire kiffer ton école ?
      </Text>
      <Text style={styles.labelForm}>Club créateur de l'évènement</Text>
      <Picker
        style={styles.selectForm}
        onValueChange={(value) => setClub(value)}
      >
        {eventsList.map((event) => {
          return <Picker.Item label={event.name} value={event.id} />;
        })}
      </Picker>
      <Text style={styles.labelForm}>Nom de l'évènement</Text>
      <TextInput
        style={styles.inputForm}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onSubmitEditing={(nativeEvent) => setName(nativeEvent.text)}
      />
      <Text style={styles.labelForm}>Description de l'évènement</Text>
      <TextInput
        style={styles.inputForm}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onSubmitEditing={(nativeEvent) => setDescription(nativeEvent.text)}
      />
      <ValidationButton />
    </View>
  );
}

// items={eventsList.map((item) => ({ label: item.name, value: item.id }))}
