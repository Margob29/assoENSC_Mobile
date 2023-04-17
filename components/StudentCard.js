import styles from "../theme/styles";
import { View, Text, TouchableOpacity } from "react-native";

export default function StudentCard(props) {
  const { name, year, mail, onDelete } = props;
  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textDate}>{year}</Text>
        <Text style={styles.textMail}>{mail}</Text>
        <View style={styles.cardBottom}>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
