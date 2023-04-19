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

export default function EventModification(props) {
  const id = props.route.params.id;
  const [club, setClub] = useState(props.route.params.club);
  const [name, setName] = useState(props.route.params.name);
  const [date, setDate] = useState(props.route.params.date);
  const [clubsList, setClubsList] = useState([]);
  const [description, setDescription] = useState(
    props.route.params.description
  );
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
    setShowCalendar(false);
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

  const handleUpdateEvent = () => {
    // Modifier l'événement dans la base de données
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/EventApi/${props.route.params.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //date,
          id,
          name,
          date,
          description,
          groupId: club,
        }),
      }
    )
      .then(() => {
        console.log("Event updated successfully");
        props.navigation.navigate("EventsList");
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
          <Text style={styles.subtitle}>Prêt à modifier ton événement ?</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.labelForm}>Club créateur de l'évènement</Text>
          <Picker
            style={styles.selectForm}
            selectedValue={club}
            onValueChange={(value) => setClub(value)}
            multiline={true}
          >
            {clubsList.map((event) => {
              return <Picker.Item label={event.name} value={event.id} />;
            })}
          </Picker>
          <Text style={styles.labelForm}>Nom de l'évènement</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.inputForm}
              value={name}
              onChangeText={(text) => setName(text)}
              multiline={true}
            />
          </View>
          <Text style={styles.labelForm}>Description de l'évènement</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.inputForm}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View
            style={{
              marginVertical: 32,
            }}
          >
            <Text style={styles.labelForm}>Date de l'évènement</Text>

            <CalendarPicker
              onDateChange={handleDateChange}
              selectedStartDate={date}
              width={300}
              height={300}
              textStyle={{
                fontWeight: "normal",
                color: "#000",
              }}
              selectedDayTextStyle={{
                fontWeight: "bold",
                color: "#fff",
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.validateButton}
            onPress={handleUpdateEvent}
          >
            <Text style={styles.validateText}>Mettre à jour l'évènement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
