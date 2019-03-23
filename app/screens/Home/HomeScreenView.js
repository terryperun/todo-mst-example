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
  addTodo,
}) => (
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
    {/* <View> */}
    <FlatList
      data={todoList}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);
// </View>
{
  /* {todoList.map((item) => ( */
}
{
  /* <TodoItem /> */
}
{
  /* <TouchableNativeFeedback
          onPress={() => item.toggleCompleted(item.id)}
        >
          <Text style={[s.todo, item.completed && s.completed]}>
            {item.text}
          </Text>
        </TouchableNativeFeedback> */
}
{
  /* ))} */
}

HomeScreen.navigationOptions = () => ({
  title: 'Home',
});

// HomeScreen.propTypes = {
//   user: T.object.isRequired,
// };

export default observer(HomeScreen);
