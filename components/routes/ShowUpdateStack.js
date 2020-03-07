import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import ShowUpdates from "../screens/showupdates/ShowUpdateList";
import ShowUpdateDetails from "../screens/showupdates/ShowUpdateDetails";
const screens = {
  ShowUpdates: {
    screen: ShowUpdates,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Show Updates" navigation={navigation} />
        )
      };
    }
  },
  ShowUpdateDetails: {
    screen: ShowUpdateDetails,
    navigationOptions: {
      title: "Show Update Details"
    }
  }
};

const UserStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "white", height: 90 }
  }
});

export default UserStack;
