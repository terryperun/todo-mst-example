import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import RootNavigator from './app/navigation/RootNavigator';
import createStore from './app/stores/createStore';
import { HomeScreen } from './app/screens';

const store = createStore();
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
