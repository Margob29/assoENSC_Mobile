import { React, useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import styles from "../../theme/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import StudentCard from "../../components/StudentCard";

export default function StudentScreen(props) {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch(
      "https://enscmobilebureau.azurewebsites.net/api/StudentApi/GetStudents"
    )
      // Accès au contenu JSON de la réponse
      .then((response) => response.json())
      .then((content) => {
        setStudentsList(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [studentsList]);

  const handleDeleteStudent = (studentId) => {
    // Supprimer l'événement de la base de données
    fetch(
      `https://enscmobilebureau.azurewebsites.net/api/StudentApi/${studentId}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        console.log("Student deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      {/* Bouton d'ajout d'élèves */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons
          name={"add-outline"}
          size={80}
          color={"#fff"}
          onPress={() => props.navigation.navigate("StudentCreation")}
        />
      </TouchableOpacity>
      {/* Cartes des élèves existants */}
      <FlatList
        data={studentsList}
        renderItem={({ item }) => (
          <StudentCard
            name={item.name}
            year={item.promo}
            mail={item.emailAdress}
            id={item.id}
            onDelete={() => handleDeleteStudent(item.id)}
          />
        )}
      />
    </View>
  );
}
