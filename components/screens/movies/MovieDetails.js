import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView
} from "react-native";
import { globalStyles } from "../../styles/global";
import Card from "../../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteButton from "../../shared/DeleteButton";
import EditButton from "../../shared/EditButton";
import EditMovieForm from "./EditMovieForm";
import FlatButton from "../../shared/FlatButton";
import { useDispatch, useSelector } from "react-redux";
import { editMovie } from "../../../store/movies/actions";
// import { addNewMovieUpdate } from "../../../store/Movieupdates/actions";

export default function MovieDetails({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const item = navigation.getParam("item");
  const handleDelete = navigation.getParam("handleDelete");
  const dispatch = useDispatch();
  const id = item.id;
  console.log(item, handleDelete, editOneMovie, "navigation");
  const currentUser = useSelector(state => state.users.loggedInUser);

  const handleBoth = () => {
    handleDelete(item.id);
    navigation.pop();
  };

  const editOneMovie = (updatedMovie, id) => {
    console.log(updatedMovie, "updatedMovie Moviedetails conponent");
    dispatch(editMovie(updatedMovie, id));
    setModalOpen(false);
    navigation.pop();
  };

  if (currentUser.rank === "admin") {
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
                <EditMovieForm editOneMovie={editOneMovie} item={item} />
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
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieGenre}>{item.genre}</Text>
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
        source={require("../../assets/greyBackground.jpg")}
        style={styles.background}
      >
        <View style={globalStyles.container}>
          {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}
          <ScrollView>
            <Card>
              <Image
                style={styles.image}
                source={{ uri: item.image }}
                resizeMode="contain"
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieGenre}>{item.genre}</Text>
              {/* <View style={styles.border} /> */}
              <Text style={globalStyles.titleText}>{item.description}</Text>
              <View />
              <Text style={globalStyles.titleText}>{item.platform}</Text>
            </Card>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 30,
    color: "#333"
  },
  movieGenre: {
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
