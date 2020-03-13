import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
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
  const currentUser = useSelector(state => state.users.loggedInUser);
  const showUpdates = useSelector(state => state.showUpdates.all);

  useEffect(() => {
    dispatch(fetchAllShows());
    dispatch(fetchAllShowUpdates());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(removeShowUpdate(id));
  };

  return (
    <ImageBackground
      source={require("../../assets/greyBackground.jpg")}
      style={styles.background}
    >
      <View style={globalStyles.container}>
        {/* The onpress to true is open the modal  */}
        {currentUser.rank === "admin" ? (
          <View>
            <FlatList
              style={{ marginTop: 20 }}
              data={showUpdates}
              keyExtractor={item => item.content}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ShowUpdateDetails", {
                      item,
                      handleDelete
                    })
                  }
                >
                  <Card>
                    <Text style={globalStyles.titleText}>{item.content}</Text>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <View>
            <Card>
              <Text style={styles.email}>
                Do you have recommendations? Select the show you would like
                recommend changes to and submit your request.
              </Text>
            </Card>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 15,
    color: "#333"
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
