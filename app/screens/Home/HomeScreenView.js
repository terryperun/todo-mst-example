import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import T from 'prop-types';
import s from './styles';
import { observer } from 'mobx-react/custom';

import { TodoItem } from '../../components';

const HomeScreen = ({
  textInputValue,
  setTextInputValue,
  todoList,
  suggestList,
  addTodo,
}) => {
  const showSuggest = suggestList.length > 0;

  console.log('suggestList.length', showSuggest, suggestList);
  return (
    <View style={s.container}>
      <View style={s.inputContainer}>
        <TextInput
          placeholder="Collection name"
          style={s.input}
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
        <TouchableNativeFeedback style={s.button} onPress={addTodo}>
          <Text>Add</Text>
        </TouchableNativeFeedback>
      </View>
      {showSuggest && (
        <React.Fragment>
          <Text>Suggestions:</Text>
          <FlatList
            data={suggestList}
            renderItem={({ item }) => <TodoItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </React.Fragment>
      )}
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

HomeScreen.navigationOptions = () => ({
  title: 'Home',
});

export default observer(HomeScreen);
