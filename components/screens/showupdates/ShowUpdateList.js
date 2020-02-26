import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image
} from "react-native";
import { globalStyles } from "../../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../shared/card";
import { fetchAllUsers } from "../../../store/users/actions";
import { fetchAllShowUpdates } from "../../../store/showupdates/actions";
import { fetchAllShows } from "../../../store/shows/actions";

export default function ShowUpdateList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
    dispatch(fetchAllShowUpdates());
  }, [dispatch]);

  const shows = useSelector(state => state.shows.all);
  const showUpdates = useSelector(state => state.showUpdates.all);
  const showUpdatesName = showUpdates.filter(
    showUpdate => showUpdate.show_id === shows.id
  );
  console.log(showUpdatesName, " Show update names");

  return (
    <View style={globalStyles.container}>
      {/* The onpress to true is open the modal  */}
      <View>
        <FlatList
          style={{ marginTop: 20 }}
          data={showUpdatesName}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("UserDetails", { item })}
            >
              <Card>
                <Text style={globalStyles.titleText}>
                  {showUpdatesName.title}
                </Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
