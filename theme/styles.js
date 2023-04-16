import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 5,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  titleCard: {
    backgroundColor: "#560067",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },

  deleteButton: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: "50%",
    alignItems: "center",
    backgroundColor: "#efefef",
  },

  deleteText: {
    color: "red",
    fontSize: 20,
    margin: 10,
  },

  cardBottom: {
    backgroundColor: "#efefef",
    width: "100%",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  cardImage: {
    height: 200,
    width: "90%",
    margin: 15,
  },

  textDate: {
    fontSize: 20,
    color: "grey",
    marginBottom: 10,
  },

  pageTitle: {
    fontSize: 30,
    backgroundColor: "#560067",
    textAlign: "center",
  },
});

export default styles;
