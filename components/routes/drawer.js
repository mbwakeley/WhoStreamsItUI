import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import MovieStack from "./MovieStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Movies: {
    screen: MovieStack
  }
});

export default createAppContainer(RootDrawerNavigator);
