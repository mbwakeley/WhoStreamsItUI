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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const users = useSelector(state => state.users.all);
  const id = item.id;
  console.log("showupdate id", item);
  const updateByUser = users.filter(user => user.id === item.user_id)[0];
  console.log(updateByUser, "updatebyuser");

  return (
    <View style={globalStyles.container}>
      {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}

      <Card>
        <Text style={styles.showTitle}>{item.show_id}</Text>
        <Text style={styles.username}>{item.user_id}</Text>
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
