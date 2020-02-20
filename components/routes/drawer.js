import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import MovieStack from "./MovieStack";
import UserStack from "./UserStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Movies: {
    screen: MovieStack
  },
  Users: {
    screen: UserStack
  }
});

export default createAppContainer(RootDrawerNavigator);
