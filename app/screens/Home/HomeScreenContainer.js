import { compose, withState, withHandlers } from 'recompose';
import HomeScreenComponent from './HomeScreenView';
import { inject, observer } from 'mobx-react/custom';

export default compose(
  inject((props) => ({
    increment: props.store.increment,
    decrement: props.store.decrement,
    count: props.store.count,
  })),
  observer,
  // withState('textInputValue', 'setTextInputValue', ''),
  // withState('list', 'setList', []),
  // withHandlers({
  //   addToList: (props) => () => {
  //     props.setList
  //   }
  // })
)(HomeScreenComponent);
