import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  remove: {},
  todo: { marginRight: 5 },
  completed: {
    textDecorationLine: 'line-through',
  },
});
