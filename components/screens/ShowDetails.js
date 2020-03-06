import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
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
import FlatButton from "../shared/FlatButton";
import { useDispatch, useSelector } from "react-redux";
import { editShow } from "../../store/shows/actions";
import NewShowUpdateForm from "../screens/showupdates/NewShowUpdateForm";
import { addNewShowUpdate } from "../../store/showupdates/actions";

export default function ShowDetails({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const item = navigation.getParam("item");
  const handleDelete = navigation.getParam("handleDelete");
  const dispatch = useDispatch();
  const id = item.id;
  console.log(id, handleDelete, editOneShow, "navigation");
  const currentUser = useSelector(state => state.users.loggedInUser);

  const handleBoth = () => {
    handleDelete(item.id);
    navigation.pop();
  };

  const editOneShow = (updatedShow, id) => {
    console.log(updatedShow, "updatedshow showdetails conponent");
    dispatch(editShow(updatedShow, id));
    setModalOpen(false);
    navigation.pop();
  };
  console.log("item", item.id);

  const addShowUpdate = newShowUpdate => {
    dispatch(addNewShowUpdate(newShowUpdate));
    setModalOpen(false);
  };

  if (currentUser.rank === "admin") {
    return (
      <ImageBackground
        source={require("../assets/greyBackground.jpg")}
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
                <EditShowForm editOneShow={editOneShow} item={item} />
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
                <DeleteButton text="Delete" onPress={() => handleBoth()} />
              </View>
            </Card>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={require("../assets/greyBackground.jpg")}
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
                <NewShowUpdateForm addShowUpdate={addShowUpdate} item={item} />
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
                <FlatButton
                  text="Submit Update Request"
                  onPress={() => setModalOpen(true)}
                />
              </View>
            </Card>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
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
