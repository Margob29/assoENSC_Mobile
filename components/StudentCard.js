import styles from "../theme/styles";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StudentCard(props) {
  const { name, year, mail, onDelete, id } = props;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textDate}>{year}</Text>
        <Text style={styles.textMail}>{mail}</Text>
        <View style={styles.cardBottom}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
              <Text style={styles.deleteText}>Supprimer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modifyButton}
              onPress={() => {
                navigation.navigate("StudentUpdate", {
                  id,
                  name,
                  mail,
                  year,
                });
              }}
            >
              <Text style={styles.modifyText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
