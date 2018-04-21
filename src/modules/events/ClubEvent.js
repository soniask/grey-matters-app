import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './ClubEventStyles';


const ClubEvent = () => {
  var clubEvent = {
    'imgURI': 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p200x200/29066536_796994107154965_7780716167616548386_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHWwaX32bz-DEHRzw0vv0wbFJprwtnzLT9roboXnJODnrVgSRWySeLSxtZDdNJd4Fa3zp5DxOZz65kMkg7GxC21sPOS2E02FlqljeeFzb0rXg&oh=795833525dc92eb95dd79c5b9ce7eca2&oe=5B5727D4',
    'name': 'NAME',
    'date': 'DATE',
    'time': 'TIME',
    'location': 'LOCATION',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'link': 'Live stream link',
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: clubEvent.imgURI}} style={styles.image}/>
      <View style={styles.mainContainer}>
        <View style={styles.metaData}>
          <View style={[styles.small, styles.metaDataBox]}>
            <Text>{clubEvent.date}</Text>
          </View>
          <View style={[styles.small, styles.metaDataBox]}>
            <Text>{clubEvent.time}</Text>
          </View>
          <View style={[styles.large, styles.metaDataBox]}>
            <Text>{clubEvent.location}</Text>
          </View>
        </View>
        <Text style={styles.description}>{clubEvent.description}</Text>
        <Text style={styles.bold}>Watch it here!</Text>
        <Text style={styles.blue}>{clubEvent.link}</Text>
      </View>
      <Button
        title='RSVP'
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
      />
    </View>
)}

export default ClubEvent;
