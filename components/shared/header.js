import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    // <LinearGradient
    //   colors={["#373737", "#4B4B4B", "#373737"]}
    //   style={styles.gradient}
    // >
    <View style={styles.headerTitle}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#373737",
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
  // gradient: {
  // width: "100%",
  // height: "100%",
  // flex: 1,
  // borderRadius: 5
  // }
});
