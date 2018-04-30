import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  box: {
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  word: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1ba5b8'
  },
  definition: {
    paddingTop: 5
  },
});

export default styles;
  