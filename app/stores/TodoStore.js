import { types } from 'mobx-state-tree';

export const Todo = types
  .model('Todo', {
    id: types.string,
    text: types.string,
    completed: false,
    createdAt: types.Date,
    updatedAt: types.Date,
  })

  .actions((store) => ({
    toggleCompleted() {
      store.completed = !store.completed;
    },
  }));

export const TodoStore = types
  .model('TodoStore', {
    list: types.array(Todo),
  })

  .views((store) => ({
    get asArray() {
      return store.list.slice();
    },
  }))

  .actions((store) => ({
    add(text) {
      const todo = {
        id: new Date().getTime().toString(),
        text,
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      store.list.push(todo);
    },
  }));
