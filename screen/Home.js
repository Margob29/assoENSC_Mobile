import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = (props) => {
  const image = require("../assets/campus.jpg");

  const goTo = (root) => {
    props.navigation.navigate(root);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La vie associative de l'ENSC</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goTo("RootTabNavigator", "EventsStackNavigator");
        }}
      >
        <Image source={image} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Ionicons name={"calendar-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButton}>Voir les events</Text>
          <Ionicons name={"calendar-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goTo("ClubStackNavigator");
        }}
      >
        <Image source={image} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Ionicons name={"people-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButton}>Les clubs</Text>
          <Ionicons name={"people-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          goTo("StudentsStackNavigator");
        }}
      >
        <Image source={image} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Ionicons name={"person-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButton}>Qui sont les élèves ?</Text>
          <Ionicons name={"person-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#560067",
  },
  container: {
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 24,
  },
  button: {
    margin: 20,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    elevation: 5,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 125,
  },
});
