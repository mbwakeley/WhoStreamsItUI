import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import store from "./store";
import Home from "./Home";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Home />
      </View>
    </Provider>
  );
}
