import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function DeleteButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <LinearGradient
          colors={["#9f0d0d", "#b61c1c", "#ce2828"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10
  },
  buttonText: {
    color: "#373737",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
});
