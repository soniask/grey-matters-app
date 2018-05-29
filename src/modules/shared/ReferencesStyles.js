import {
  Dimensions,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  referenceBox: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ff404e',
  },
  referenceHeader: {
    fontWeight: 'bold',
    paddingTop: 20,
  },
  references: {
    paddingTop: 10,
  },
  reference: {
    flexDirection: 'row',
  },
  number: {
    width: 30,
    backgroundColor: 'cornflowerblue',
  },
  citation: {
    paddingLeft: 15,
    backgroundColor: 'forestgreen',
    width: Dimensions.get('window').width - 75
  },
})

export default styles;
