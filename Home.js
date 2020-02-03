import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { fetchAllShows } from "./store/shows/actions";
import { useDispatch, useSelector } from "react-redux";
import Item from "./components/Item";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  const shows = useSelector(state => state.shows.all);

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
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
