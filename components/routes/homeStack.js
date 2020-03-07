import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Home from "../screens/home";
import ShowDetails from "../screens/ShowDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Who Streams It?" navigation={navigation} />
        )
      };
    }
  },
  ShowDetails: {
    screen: ShowDetails,
    navigationOptions: {
      title: "Show Details"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "yellow", height: 90 }
  }
});

export default HomeStack;
