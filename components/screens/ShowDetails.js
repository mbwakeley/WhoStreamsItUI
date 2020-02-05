import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ShowDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      {/* {navigation.getParam("title")} is pretty much the same as prosp.reviews.title */}
      <Card>
        <Text style={styles.showTitle}>{navigation.getParam("title")}</Text>

        <Text style={styles.showGenre}>{navigation.getParam("genre")}</Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("description")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("platform")}
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  showTitle: {
    fontSize: 25,
    color: "#333"
  },
  showGenre: {
    fontSize: 20,
    color: "#333"
  }
});
