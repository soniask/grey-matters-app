import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  box: {
    width: Dimensions.get('window').width - 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    paddingTop: 5
  },
});

export default styles;
