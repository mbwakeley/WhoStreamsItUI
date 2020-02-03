import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Item({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
