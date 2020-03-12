import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import NewMovieForm from "./NewMovieForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMovies,
  removeMovie,
  addNewMovie
} from "../../../store/movies/actions";

export default function Movies({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.loggedInUser);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  const movies = useSelector(state => state.movies.all);
  console.log("movies1234", movies);

  const addMovie = movie => {
    dispatch(addNewMovie(movie));
    setModalOpen(false);
  };

  const handleDelete = id => {
    dispatch(removeMovie(id));
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
                <NewMovieForm addMovie={addMovie} />
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
            data={movies}
            numColumns={3}
            keyExtractor={item => item.image}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MovieDetails", {
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
        source={require("../../assets/greyBackground.jpg")}
        style={styles.background}
      >
        <View style={globalStyles.container}>
          <FlatList
            data={movies}
            numColumns={3}
            keyExtractor={item => item.image}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MovieDetails", {
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
