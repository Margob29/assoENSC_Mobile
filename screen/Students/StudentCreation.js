import { React, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../../theme/styles";

export default function StudentCreation(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [promo, setPromo] = useState("");
  const currentYear = new Date().getFullYear();
  let promoList = [];
  for (let i = 2009; i <= currentYear + 3; i++) {
    promoList.push(i);
  }

  const handleAddStudent = () => {
    // Ajout d'un nouvel élève dans la base de données
    fetch(`https://enscmobilebureau.azurewebsites.net/api/StudentApi`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        emailAdress: mail,
        promo,
      }),
    })
      .then(() => {
        console.log("Student added successfully");
        props.navigation.navigate("StudentsList");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleForm}>Ajouter un étudiant</Text>
      <Text style={styles.labelForm}>Nom :</Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.inputForm}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.labelForm}>Email :</Text>
        <TextInput
          style={styles.inputForm}
          value={mail}
          onChangeText={(text) => setMail(text)}
        />
        <Text style={styles.labelForm}>Promo :</Text>
        <Picker
          style={styles.selectForm}
          onValueChange={(value) => setPromo(value)}
        >
          {promoList.map((prom, index) => {
            return <Picker.Item key={index} label={`${prom}`} value={prom} />;
          })}
        </Picker>
        <TouchableOpacity
          style={styles.validateButton}
          onPress={handleAddStudent}
        >
          <Text style={styles.validateText}>Ajouter l'étudiant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
