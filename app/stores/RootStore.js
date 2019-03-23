import { types } from 'mobx-state-tree';
import { TodoStore } from './TodoStore';
export const RootStore = types
  .model({
    todo: types.optional(TodoStore, {}),
  })

  .actions((store) => ({
    bootstrap(initialValue) {},
  }));
