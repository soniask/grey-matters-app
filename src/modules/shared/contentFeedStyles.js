import {
  StyleSheet,
} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentListItem: {
    flexDirection: 'row', 
    flex: 1
  },
  box: {
    height: 200,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 3
  },
  informationBox: {
    height: 160,
    flex: 4, 
    paddingLeft: 10,
    overflow: 'hidden',
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
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'flex-start',
  },
  date: {
    position: 'absolute',
    right: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#ff404e',
    borderLeftWidth: 1,
  },
  description: {
    paddingTop: 5,
  },
  readMore: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    right: 0,
  },
  blue: {
    color: '#1ba5b8'
  }
});

export default styles;
