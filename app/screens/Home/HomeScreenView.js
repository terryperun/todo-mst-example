import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import T from 'prop-types';
import s from './styles';
import { observer } from 'mobx-react/custom';

const HomeScreen = ({
  textInputValue,
  setTextInputValue,
  count,
  increment,
  decrement,
}) => (
  <View style={s.container}>
    {/* <TextInput
      placeholder="Collection name"
      style={s.input}
      value={textInputValue}
      onChangeText={setTextInputValue}
    />
    <View style={s.button}>
      <Text>Add</Text>
    </View> */}
    <View style={s.count}>
      <Text>Count {count}</Text>
    </View>
    <View style={s.buttons}>
      <TouchableNativeFeedback
        style={s.buttonPlus}
        onPress={increment}
      >
        <Text>+</Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        style={s.buttonMinus}
        onPress={decrement}
      >
        <Text>-</Text>
      </TouchableNativeFeedback>
    </View>
  </View>
);

HomeScreen.navigationOptions = () => ({
  title: 'Home',
});

// HomeScreen.propTypes = {
//   user: T.object.isRequired,
// };

export default observer(HomeScreen);
