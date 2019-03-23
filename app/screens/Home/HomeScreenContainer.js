import { compose, withState, withHandlers } from 'recompose';
import HomeScreenComponent from './HomeScreenView';
import { inject, observer } from 'mobx-react/custom';

export default compose(
  inject((props) => ({
    todoList: props.todo.asArray,
    addTodo: props.todo.add,
  })),
  observer,
  withState('textInputValue', 'setTextInputValue', ''),

  withHandlers({
    addTodo: (props) => () => {
      props.addTodo(props.textInputValue);
      props.setTextInputValue('');
    },
  }),
)(HomeScreenComponent);
