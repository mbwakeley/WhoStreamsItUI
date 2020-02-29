import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import Card from "../../shared/card";
import DeleteButton from "../../shared/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../store/users/actions";
import { fetchAllShows } from "../../../store/shows/actions";

export default function ShowUpdateDetails({ navigation }) {
  const item = navigation.getParam("item");
  const handleDelete = navigation.getParam("handleDelete");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllShows());
  }, [dispatch]);

  const users = useSelector(state => state.users.all);
  const shows = useSelector(state => state.shows.all);
  const id = item.id;
  console.log("showupdate id", item);

  let updateByUser = {};
  users.forEach(user => {
    if (user.id === item.user_id) {
      updateByUser = user;
    }
  });

  let updateByShow = {};
  shows.forEach(show => {
    if (show.id === item.show_id) {
      updateByShow = show;
    }
  });

  // const updateByShow = shows.filter(show => show.id === item.user_id)[0];

  //This will delete the show and allow user to go back to the previous.
  const handleBoth = () => {
    handleDelete(id);
    navigation.pop();
  };

  return (
    <View style={globalStyles.container}>
      {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}

      <Card>
        <Text style={styles.showTitle}>{updateByShow.title}</Text>
        <Text style={styles.username}>{updateByUser.username}</Text>
        {/* <View style={styles.border} /> */}
        <Text style={globalStyles.titleText}>{item.content}</Text>
        <View />
        <View style={styles.buttonView}>
          <DeleteButton text="Delete" onPress={() => handleBoth()} />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  showTitle: {
    fontSize: 30,
    color: "#333"
  },
  username: {
    fontSize: 25,
    color: "#333"
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
  }
});
