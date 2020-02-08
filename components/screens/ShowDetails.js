import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import DeleteButton from "../shared/DeleteButton";
import EditButton from "../shared/EditButton";

export default function ShowDetails({ navigation }) {
  const item = navigation.getParam("item");
  const handleDelete = navigation.getParam("handleDelete");
  console.log(handleDelete, "navigation");

  return (
    <View style={globalStyles.container}>
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
            <EditButton text="Edit" />
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
