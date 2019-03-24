import { types, applySnapshot, flow } from 'mobx-state-tree';
import { TodoStore } from './TodoStore';
import { AsyncStorage } from 'react-native';
export const RootStore = types
  .model({
    todo: types.optional(TodoStore, {}),
  })

  .actions((store) => ({
    bootstrap: flow(function* bootstrap(initialValue) {
      try {
        const snapshot = yield AsyncStorage.getItem('snapshot');
        applySnapshot(store, JSON.parse(snapshot));
      } catch (err) {
        console.log(err);
      }
    }),
  }));
