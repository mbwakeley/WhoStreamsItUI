import React, { useState, useEffect } from "react";
import {
  StyleSheet,
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
import DeleteButton from "../../shared/DeleteButton";
import EditButton from "../../shared/EditButton";

export default function UserDetails({ navigation }) {
  const item = navigation.getParam("item");
  const id = item.id;
  const handleDelete = navigation.getParam("handleDelete");
  console.log(id, "id");

  const handleBoth = () => {
    handleDelete(item.id);
    navigation.pop();
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.email}>Username: {item.username}</Text>
        <Text style={styles.email}>Email: {item.email}</Text>
        {/* <View style={styles.border} /> */}
        <Text style={styles.email}>Rank: {item.rank}</Text>
        <View style={styles.buttonView}>
          <EditButton text="Edit" />
          <DeleteButton text="Delete" onPress={() => handleBoth()} />
        </View>
      </Card>
    </View>
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
