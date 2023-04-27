import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --------- Home ------------
  titleHome: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#560067",
  },

  containerHome: {
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "space-around",
  },

  imageHome: {
    width: "100%",
    height: 125,
  },

  // --------- Cards ------------
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

  titleCardDetails: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#560067",
  },

  // --------- Buttons ------------
  buttonContainerHome: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 24,
  },

  buttonHome: {
    margin: 20,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    elevation: 5,
  },

  textButtonHome: {
    fontSize: 20,
    textAlign: "center",
  },

  deleteButton: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: "40%",
    alignItems: "center",
    backgroundColor: "#efefef",
  },

  modifyButton: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: "40%",
    alignItems: "center",
    backgroundColor: "#efefef",
  },

  deleteText: {
    color: "red",
    fontSize: 20,
    margin: 10,
  },

  modifyText: {
    color: "black",
    fontSize: 20,
    margin: 10,
  },

  addButton: {
    position: "absolute",
    top: 520,
    right: 20,
    borderRadius: 40,
    width: 80,
    backgroundColor: "#560067",
    padding: -10,
    zIndex: 1,
    elevation: 2,
    shadowColor: "white",
    shadowRadius: 10,
  },

  validateButton: {
    borderColor: "#560067",
    borderWidth: 2,
    borderRadius: 15,
    margin: 24,
    width: "70%",
    alignItems: "center",
    backgroundColor: "#560067",
    elevation: 5,
  },

  validateText: {
    color: "white",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },

  // --------- Texts ------------
  title: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },

  /*
  secondTitle: {
    fontSize: 16,
    color: 'black',
    textAlign: "center",
  },*/

  textDate: {
    fontSize: 20,
    color: "grey",
    marginBottom: 10,
  },

  textName: {
    fontSize: 40,
    marginBottom: 10,
    color: "#560067",
  },

  textMail: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },

  pageTitle: {
    fontSize: 30,
    backgroundColor: "#560067",
    textAlign: "center",
  },

  // --------- Forms ------------
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
    marginTop: 32,
    marginBottom: 16,
  },

  inputForm: {
    textAlign: "center",
    height: 50,
    width: "70%",
    borderRadius: 30,
    backgroundColor: "white",
    elevation: 5,
    flexWrap: "wrap",
    marginBottom: 32,
  },

  formContainer: {
    flex: 1,
    justifyContent: "space-around",
  },

  selectForm: {
    height: 50,
    borderWidth: 3,
    width: "50%",
    borderRadius: 30,
    marginBottom: 30,
  },

  // --------- Others ------------
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  subtitle: {
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
    height: 200,
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
});

export default styles;
