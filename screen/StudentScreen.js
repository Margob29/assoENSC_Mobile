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
import StudentCard from "../components/StudentCard";

export default function StudentScreen() {
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
      <FlatList
        data={studentsList}
        renderItem={({ item }) => (
          <StudentCard
            name={item.name}
            year={item.promo}
            mail={item.emailAdress}
            onDelete={() => handleDeleteStudent(item.id)}
          />
        )}
      />
    </View>
  );
}
