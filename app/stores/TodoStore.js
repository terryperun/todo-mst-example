import { types, getParent } from 'mobx-state-tree';
import Fuse from 'fuse.js';

export const Todo = types
  .model('Todo', {
    id: types.identifier,
    text: types.string,
    completed: false,
    createdAt: types.Date,
    updatedAt: types.Date,
  })

  .actions((store) => ({
    toggleCompleted() {
      store.completed = !store.completed;
    },

    remove() {
      getParent(store, 2).remove(store.id);
    },
  }));

export const TodoStore = types
  .model('TodoStore', {
    list: types.array(types.reference(Todo)),
    searchList: types.array(types.reference(Todo)),
    entities: types.map(Todo),
  })

  .volatile((store) => ({}))

  .views((store) => ({
    get asArray() {
      return store.list.slice();
    },
    get searchAsArray() {
      return store.searchList.slice();
    },
  }))

  .actions((store) => ({
    add(text) {
      const todo = {
        id: new Date().getTime().toString(),
        text,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      store.entities.set(todo.id, todo);
      store.list.push(todo.id);
    },

    remove(id) {
      const indexInList = store.list.findIndex((i) => i.id === id);
      const indexInSearch = store.searchList.findIndex((i) => i.id === id);

      if (indexInList > -1) {
        store.list.splice(indexInList, 1);
      }
      if (indexInSearch > -1) {
        store.searchList.splice(indexInSearch, 1);
      }
    },
    suggest(text) {
      const fuse = new Fuse(store.asArray, {
        keys: ['text'],
      });

      const result = fuse.search(text).map((item) => {
        return item.id;
      });
      store.searchList = result;
    },
  }));
