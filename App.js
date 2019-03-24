import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

import RootNavigator from './app/navigation/RootNavigator';
import createStore from './app/stores/createStore';
import { HomeScreen } from './app/screens';

const store = createStore();

onSnapshot(store, (newSnapshot) => {
  console.log('Set snapshot', newSnapshot);
  AsyncStorage.setItem('snapshot', JSON.stringify(newSnapshot));
});

store.bootstrap(0);

const App = () => (
  <Provider root={store} {...store}>
    <RootNavigator />
  </Provider>
);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
