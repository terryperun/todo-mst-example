import {
  compose,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import HomeScreenComponent from './HomeScreenView';
import { inject, observer } from 'mobx-react/custom';

export default compose(
  inject((props) => ({
    todoList: props.todo.asArray,
    addTodo: props.todo.add,
  })),
  withProps(console.log),
  observer,
  withState('textInputValue', 'setTextInputValue', ''),

  withHandlers({
    addTodo: (props) => () => {
      props.addTodo(props.textInputValue);
      props.setTextInputValue('');
    },
  }),
)(HomeScreenComponent);
