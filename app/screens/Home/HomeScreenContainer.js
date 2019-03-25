import {
  compose,
  withState,
  withHandlers,
  withProps,
  withStateHandlers,
} from 'recompose';
import HomeScreenComponent from './HomeScreenView';
import { inject, observer } from 'mobx-react/custom';

export default compose(
  inject((props) => ({
    todoList: props.todo.asArray,
    suggestList: props.todo.searchAsArray,
    addTodo: props.todo.add,
    suggest: props.todo.suggest,
  })),
  observer,
  withStateHandlers(
    {
      textInputValue: '',
    },
    {
      setTextInputValue: (_, props) => (text) => {
        props.suggest(text);

        return {
          textInputValue: text,
        };
      },
    },
  ),

  withHandlers({
    addTodo: (props) => () => {
      props.addTodo(props.textInputValue);
      props.setTextInputValue('');
    },
  }),
)(HomeScreenComponent);
