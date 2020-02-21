import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const hello = () => {
    console.log("hello");
  };
  return (
    <View style={styles.headerTitle}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    textAlign: "center",
    width: 330
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
