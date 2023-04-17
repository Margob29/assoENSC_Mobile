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

  addButton: {
    position: "absolute",
    top: 520,
    right: 20,
    borderRadius: 50,
    backgroundColor: "white",
    padding: -10,
    zIndex: 1,
    elevation: 2,
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

  titleForm: {
    fontSize: 50,
    textAlign: "center",
    color: "#560067",
    marginBottom: 20,
  },

  catchyWordsForm: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },

  labelForm: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },

  inputForm: {
    height: 50,
    borderWidth: 3,
    width: "70%",
    borderRadius: 30,
    marginBottom: 30,
  },

  formContainer: {
    flex: 1,
    alignItems: "center",
  },

  validateButton: {
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: "70%",
    alignItems: "center",
    backgroundColor: "blue",
  },

  validateText: {
    color: "white",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },

  selectForm: {
    height: 50,
    borderWidth: 3,
    width: "50%",
    borderRadius: 30,
    marginBottom: 30,},
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#560067",
  },
  date: {
    fontSize: 24,
    textAlign: "center",
    fontStyle: "italic",
    color: "grey",
  },
  descriptionTitle: {
    margin: 16,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#560067",
  },
  description: {
    margin: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    width: "90%",
    height: "33%",
  },
  group: {
    textAlign: "center",
    borderColor: "green",
    color: "green",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    width: "25%",
  },
  cardImage: {
    height: 200,
    width: "90%",
    margin: 15,
  },
});

export default styles;
