import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../theme/styles";

//Page d'accueil lorsqu'on arrive sur l'application
const Home = (props) => {
  const image = require("../assets/campus.jpg");

  const goTo = (root, name) => {
    props.navigation.navigate(root, { screenName: name });
  };

  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleHome}>La vie associative de l'ENSC</Text>
      {/* Carte permettant d'aller sur les évènements */}
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => {
          goTo("RootTabNavigator", "EventStackNavigator");
        }}
      >
        <Image source={image} style={styles.imageHome} />
        <View style={styles.buttonContainerHome}>
          <Ionicons name={"calendar-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButtonHome}>Voir les events</Text>
          <Ionicons name={"calendar-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>
      {/* Carte permettant d'aller sur les clubs */}
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => {
          goTo("RootTabNavigator", "ClubStackNavigator");
        }}
      >
        <Image source={image} style={styles.imageHome} />
        <View style={styles.buttonContainerHome}>
          <Ionicons name={"people-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButtonHome}>Les clubs</Text>
          <Ionicons name={"people-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>
      {/* Carte permettant d'aller sur les élèves */}
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => {
          goTo("RootTabNavigator", "StudentStackNavigator");
        }}
      >
        <Image source={image} style={styles.imageHome} />
        <View style={styles.buttonContainerHome}>
          <Ionicons name={"person-outline"} size={25} color={"#560067"} />
          <Text style={styles.textButtonHome}>Qui sont les élèves ?</Text>
          <Ionicons name={"person-outline"} size={25} color={"#560067"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
