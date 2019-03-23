import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-start',

    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  todo: {},
  completed: {
    textDecorationLine: 'line-through',
  },
  button: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    margin: 16,
  },

  input: {
    margin: 16,
  },
});
