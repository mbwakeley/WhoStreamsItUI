import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  titleText: {
    fontSize: 15,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center"
  },
  uploadButton: {
    borderRadius: 8,
    backgroundColor: "teal",
    marginBottom: 20,
    height: 20,
    width: 20
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  }
});
