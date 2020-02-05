import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Movies from "../screens/Movies";

const screens = {
  Movies: {
    screen: Movies,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Who Streams It?" navigation={navigation} />
        )
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default AboutStack;
