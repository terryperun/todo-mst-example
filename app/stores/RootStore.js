import { types } from 'mobx-state-tree';

export const RootStore = types
  .model({
    count: 0,
  })

  .actions((store) => ({
    increment() {
      store.count += 1;
    },

    decrement() {
      store.count -= 1;
    },

    bootstrap(initialValue) {
      store.count = initialValue;
    },
  }));
