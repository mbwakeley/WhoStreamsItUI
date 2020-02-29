import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../shared/card";
import {
  fetchAllShowUpdates,
  removeShowUpdate
} from "../../../store/showupdates/actions";
import { fetchAllShows } from "../../../store/shows/actions";

export default function ShowUpdateList({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
    dispatch(fetchAllShowUpdates());
  }, [dispatch]);

  // const shows = useSelector(state => state.shows.all);
  const showUpdates = useSelector(state => state.showUpdates.all);

  const handleDelete = id => {
    dispatch(removeShowUpdate(id));
  };

  // let showUpdatesName = [];

  // shows.forEach(show => {
  //   for (let i = 0; i < showUpdates.length; i++) {
  //     if (show.id === showUpdates[i].show_id) {
  //       showUpdatesName.push(show);
  //     }
  //   }
  // });

  // showUpdates.forEach(showUpdate => {
  //   for (let i = 0; i < shows.length; i++) {
  //     if (showUpdate.show_id === shows[i].id) {
  //       showUpdatesName.push(showUpdate);
  //     }
  //   }
  // });

  // console.log("Hello", showUpdatesName[4], " Show update names");

  return (
    <View style={globalStyles.container}>
      {/* The onpress to true is open the modal  */}
      <View>
        <FlatList
          style={{ marginTop: 20 }}
          data={showUpdates}
          keyExtractor={item => item.content}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowUpdateDetails", { item, handleDelete })
              }
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.content}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
