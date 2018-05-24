import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  event: {
    backgroundColor: '#E6E6E8',
    alignSelf: 'stretch',
    marginBottom: 30,
  },
  eventHeader: {
    flexDirection: "row",
    height: 40,
  },
  dateBox: {
    justifyContent: 'center', 
    backgroundColor: "#1ba5b8"
  },
  timeBox: {
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
    width: 100,
    paddingLeft: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  eventTime: {
    flex: 1, 
    justifyContent: 'center'
  },
  mainInfo: {
    paddingLeft: 20,
    paddingTop: 10
  },
  eventName: {
    fontSize: 20,
    paddingBottom: 5
  },
  eventLocation: {
    fontSize: 17,
    paddingBottom: 15,
  },
})

export default styles;