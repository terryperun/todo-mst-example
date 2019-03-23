import { RootStore } from './RootStore';

export default function createStore(initialState = {}, env = {}) {
  return RootStore.create(initialState, env);
}
