import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Movies from "../screens/movies/Movies";
import MovieDetails from "../screens/movies/MovieDetails";

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
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: {
      title: "Movie Details"
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 90 }
  }
});

export default AboutStack;
