import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';
import styles from './EventsItemStyles';

const EventsItem = (props) => (
  <Link to={`/events/${props.event._id}`} >
    <View style={styles.event}>
      <View style={styles.eventHeader}>
        <View style={{justifyContent: 'center', backgroundColor: "#1ba5b8"}}>
          <Text style={styles.eventDate}>
            {new Date(props.event.dateStart).toLocaleDateString("en-US",{month: 'long', day: 'numeric'})}
          </Text>
        </View>
        <View style={styles.eventSubHeader}>
          <Text style={{flex: 1, justifyContent: 'center'}}>
            {`${new Date(props.event.dateStart).toLocaleTimeString("en-US",{hour: 'numeric', minute: 'numeric'})} - ${new Date(props.event.dateEnd).toLocaleTimeString("en-US",{hour: 'numeric', minute: 'numeric'})}`}
          </Text>
          <Icon style={{flex: 1}} name='ios-bookmark-outline' type='ionicon' />
        </View>
      </View>
      <View style={styles.mainInfo}>
        <Text style={{fontSize: 20}}>{props.event.title}</Text>
        <Text style={{fontSize: 17}}>{"LOCATION"}</Text>
      </View>
    </View>
  </Link>
)

export default EventsItem;
