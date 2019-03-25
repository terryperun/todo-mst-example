import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import s from './styles';

const Todo = ({ item }) => {
  return (
    <View style={s.container}>
      <TouchableNativeFeedback
        onPress={() => item.toggleCompleted(item.id)}
      >
        <Text style={[s.todo, item.completed && s.completed]}>
          {item.text}
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={item.remove} style={s.remove}>
        <Text>X</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default observer(Todo);
