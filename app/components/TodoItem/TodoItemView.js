import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';
import { observer } from 'mobx-react';
import s from './styles';

const Todo = ({ item }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => item.toggleCompleted(item.id)}
    >
      <Text style={[s.todo, item.completed && s.completed]}>
        {item.text}
      </Text>
    </TouchableNativeFeedback>
  );
};

export default observer(Todo);
