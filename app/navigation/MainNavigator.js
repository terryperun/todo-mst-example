import { createStackNavigator } from "react-navigation";
import screens from "./screens";
import { MainScreen } from "../screens"; // eslint-disable-line
import AppNavigator from "./AppNavigator";

export default createStackNavigator(
  {
    [screens.Some]: AppNavigator
  },
  {}
);
