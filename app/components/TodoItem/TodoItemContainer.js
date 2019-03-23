import { compose, withState, withHandlers } from 'recompose';
import TodoItemView from './TodoItemView';
import { inject, observer } from 'mobx-react/custom';

export default compose(
  inject((props) => ({
    todoList: props.todo.asArray,
  })),
  observer,
)(TodoItemView);
