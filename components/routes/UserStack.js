import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Users from "../screens/users/UserList";
import UserDetails from "../screens/users/UserDetails";
const screens = {
  Users: {
    screen: Users,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Users" navigation={navigation} />
      };
    }
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      title: "User Details"
    }
  }
};

const UserStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default UserStack;
