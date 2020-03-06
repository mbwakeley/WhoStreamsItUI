import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import NewShowForm from "./NewShowForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllShows,
  removeShow,
  addNewShow,
  editShow
} from "../../store/shows/actions";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.loggedInUser);

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  const shows = useSelector(state => state.shows.all);

  // This is to add a show
  const addShow = show => {
    console.log(show, "add show");
    dispatch(addNewShow(show));
    setModalOpen(false);
  };

  //This is to delete show
  const handleDelete = id => {
    dispatch(removeShow(id));
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
                <NewShowForm addShow={addShow} />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          {/* The onpress to true is open the modal  */}
          <MaterialIcons
            name="add"
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)}
          />
          <FlatList
            data={shows}
            numColumns={3}
            keyExtractor={item => item.image}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ShowDetails", {
                    item,
                    handleDelete
                  })
                }
              >
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
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
          <FlatList
            data={shows}
            numColumns={3}
            keyExtractor={item => item.image}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ShowDetails", {
                    item,
                    handleDelete
                  })
                }
              >
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    color: "white"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    color: "black",
    borderWidth: 1,
    borderColor: "black"
  },
  modalContent: {
    flex: 1
  },
  image: {
    height: 110,
    width: 110,
    margin: 5
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
