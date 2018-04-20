import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import EventsItem from './EventsItem';
import styles from './EventsStyles'


const Events = () => {
  upcoming = [
    {"id": 1, "date": "Feb 26", "time": "11:30-1:00pm", "name": "Event Name", "location": "Location"}
  ];
  past = [
    {"id": 2, "date": "Mar 2", "time": "11:30-1:00pm", "name": "Event Name", "location": "Location"},
    {"id": 3, "date": "Mar 10", "time": "11:30-1:00pm", "name": "Event Name", "location": "Location"}
  ];
  return (
  <ScrollView>
    <View style={[styles.content]}>
      <Text style={styles.sectionHeader}>
        Upcoming
      </Text>
      {
        upcoming.map((event) => (
          <EventsItem key={event.id}  event={event} />
        ))
      }
      <Text style={styles.sectionHeader}>
        Past
      </Text>
      {
        past.map((event) => (
          <EventsItem key={event.id}  event={event} />
        ))
      }
    </View>
  </ScrollView>
)}

export default Events;
