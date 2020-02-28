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
import { MaterialIcons } from "@expo/vector-icons";
import DeleteButton from "../../shared/DeleteButton";
import EditButton from "../../shared/EditButton";
import { useDispatch } from "react-redux";

export default function ShowUpdateDetails({ navigation }) {
  const item = navigation.getParam("item");
  const id = item.id;
  console.log("showupdate id", id);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
