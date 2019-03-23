import React from "react";
import { View, Text } from "react-native";
import T from "prop-types";
import s from "./styles";

const MainScreen = ({ user }) => (
  <View style={s.container}>
    <Text>Main Screen</Text>
  </View>
);

MainScreen.navigationOptions = () => ({
  title: "Main"
});

// MainScreen.propTypes = {
//   user: T.object.isRequired,
// };

export default MainScreen;
