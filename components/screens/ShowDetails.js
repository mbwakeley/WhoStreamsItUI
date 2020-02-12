import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteButton from "../shared/DeleteButton";
import EditButton from "../shared/EditButton";
import EditShowForm from "./EditShowForm";

export default function ShowDetails({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const item = navigation.getParam("item");
  const handleDelete = navigation.getParam("handleDelete");
  const id = item.id;
  console.log(id, handleDelete, "navigation");

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)} //This is to close the modal my setting the usestate to false
            />
            <EditShowForm />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}
      <ScrollView>
        <Card>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
          <Text style={styles.showTitle}>{item.title}</Text>
          <Text style={styles.showGenre}>{item.genre}</Text>
          {/* <View style={styles.border} /> */}
          <Text style={globalStyles.titleText}>{item.description}</Text>
          <View />
          <Text style={globalStyles.titleText}>{item.platform}</Text>
          <View style={styles.buttonView}>
            <EditButton text="Edit" onPress={() => setModalOpen(true)} />
            <DeleteButton text="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  showTitle: {
    fontSize: 30,
    color: "#333"
  },
  showGenre: {
    fontSize: 25,
    color: "#333"
  },
  image: {
    height: 315,
    width: 315,
    margin: 5
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
