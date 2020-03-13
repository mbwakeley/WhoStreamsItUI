import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../../styles/global";
import Card from "../../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteButton from "../../shared/DeleteButton";
import EditButton from "../../shared/EditButton";
import { editUser } from "../../../store/users/actions";
import { useDispatch } from "react-redux";
import EditUserForm from "./EditUserForm";

export default function UserDetails({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const item = navigation.getParam("item");
  const id = item.id;
  const handleDelete = navigation.getParam("handleDelete");

  console.log(id, "id");

  const handleBoth = () => {
    handleDelete(id);
    navigation.pop();
  };
  const editOneUser = (updatedUser, id) => {
    console.log(id, updatedUser, "updateduser from user component");
    dispatch(editUser(updatedUser, id));
    setModalOpen(false);
  };

  return (
    <ImageBackground
      source={require("../../assets/greyBackground.jpg")}
      style={styles.background}
    >
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
              <EditUserForm editOneUser={editOneUser} item={item} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Card>
          <Text style={styles.email}>Username: {item.username}</Text>
          <Text style={styles.email}>Email: {item.email}</Text>
          {/* <View style={styles.border} /> */}
          <Text style={styles.email}>Rank: {item.rank}</Text>
          <View style={styles.buttonView}>
            <EditButton text="Edit" onPress={() => setModalOpen(true)} />
            <DeleteButton text="Delete" onPress={() => handleBoth()} />
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  username: {
    fontSize: 30,
    color: "#333"
  },
  email: {
    fontSize: 15,
    color: "#333"
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderRightWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
