import React from "react";
import { createDrawerNavigator } from "react-navigation";
import screens from "./screens";
import { HomeScreen, MainScreen } from "../screens";

const AppNavigator = createDrawerNavigator(
  {
    [screens.Home]: HomeScreen,
    [screens.Main]: MainScreen
  },
  {
    initialRouteName: "Home",
    drawerWidth: 300
  }
);

export default AppNavigator;
