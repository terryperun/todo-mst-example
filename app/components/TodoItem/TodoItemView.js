import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';
import { observer } from 'mobx-react';
import s from './styles';

const Todo = ({ item }) => {
  return (
    <React.Fragment>
      <TouchableNativeFeedback
        onPress={() => item.toggleCompleted(item.id)}
      >
        <Text style={[s.todo, item.completed && s.completed]}>
          {item.text}
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={item.remove}>
        <Text>X</Text>
      </TouchableNativeFeedback>
    </React.Fragment>
  );
};

export default observer(Todo);
