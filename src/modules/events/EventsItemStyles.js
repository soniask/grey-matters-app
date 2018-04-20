import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  event: {
    backgroundColor: '#E6E6E8',
    alignSelf: 'stretch',
    height: 100,
    marginBottom: 30,
  },
  eventHeader: {
    flexDirection: "row",
    height: 35,
  },
  eventSubHeader: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 15,
    backgroundColor: '#EBEBED',
  },
  eventDate: {
    width: 80,
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  eventIcon: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  mainInfo: {
    paddingLeft: 20,
    paddingTop: 5
  }
})

export default styles;