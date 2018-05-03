import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 3,
    alignSelf: 'stretch',
  },
  mainContainer: {
    padding: 20,
    flex: 5,
  },
  metaData: {
    flexDirection: 'row', 
    borderTopColor: '#ff404e',
    borderTopWidth: 1,
    borderBottomColor: '#ff404e',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  metaDataBox: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 13,
    alignItems: 'flex-start',
  },
  small: {
    flex: 1,
    borderRightColor: '#ff404e',
    borderRightWidth: 1,
  },
  large: {
    flex: 2,
  },
  button: { 
    backgroundColor: '#1ba5b8',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonTitle: {
    color: 'white',
  },
  description: {
    paddingBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  blue: {
    color: '#1ba5b8',
  }
})

export default styles;