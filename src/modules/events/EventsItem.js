import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';
import styles from './EventsItemStyles';

const EventsItem = (props) => (
  <Link to="/clubevent" >
    <View style={styles.event}>
      <View style={styles.eventHeader}>
        <View style={{justifyContent: 'center', backgroundColor: "#1ba5b8"}}>
          <Text style={styles.eventDate}>
            {props.event.date}
          </Text>
        </View>
        <View style={styles.eventSubHeader}>
          <Text style={{flex: 1, justifyContent: 'center'}}>
            {props.event.time}
          </Text>
          <Icon style={{flex: 1}} name='ios-bookmark-outline' type='ionicon' />
        </View>
      </View>
      <View style={styles.mainInfo}>
        <Text style={{fontSize: 20}}>{props.event.name}</Text>
        <Text style={{fontSize: 17}}>{props.event.location}</Text>
      </View>
    </View>
  </Link>
)

export default EventsItem;
