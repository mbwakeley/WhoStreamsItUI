import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ShowDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}
      <Card>
        <Image
          style={styles.image}
          source={{ uri: navigation.getParam("image") }}
          resizeMode="contain"
        />
        <Text style={styles.showTitle}>{navigation.getParam("title")}</Text>
        <Text style={styles.showGenre}>{navigation.getParam("genre")}</Text>
        {/* <View style={styles.border} /> */}
        <Text style={globalStyles.titleText}>
          {navigation.getParam("description")}
        </Text>
        <View />
        <Text style={globalStyles.titleText}>
          {navigation.getParam("platform")}
        </Text>
      </Card>
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
  }
});
