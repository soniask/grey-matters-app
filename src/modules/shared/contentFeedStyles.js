import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  box: {
    height: 200,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flex: 3
  },
  informationBox: {
    flex: 4, 
    paddingLeft: 10
  },
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    paddingBottom: 5
  },
  titleText: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  metaData: {
    flexDirection: 'row', 
    borderTopColor: '#ff404e',
    borderTopWidth: 1,
    borderBottomColor: '#ff404e',
    borderBottomWidth: 1,
  },
  author: {
    flex: 2,
    marginTop: 5,
    marginBottom: 5,
    borderRightColor: '#ff404e',
    borderRightWidth: 1,
    alignItems: 'flex-start',
  },
  date: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  description: {
    paddingTop: 5
  },
  blue: {
    color: '#1ba5b8'
  }
});

export default styles;
