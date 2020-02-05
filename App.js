import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import store from "./store";
import Navigator from "./components/routes/drawer";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
