import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import EventsItem from './EventsItem';
import styles from './EventsStyles'
import { eventsActions } from '../../actions';
import Loading from '../shared/Loading';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.isGettingEvents) {
      return (
        <Loading />
      );
    }

    if (!this.props.events) {
      return (
        <Text>
          No Content Available
        </Text>
      );
    }
    return (
      <ScrollView>
        <View style={[styles.content]}>
          <Text style={styles.sectionHeader}>
            Upcoming
          </Text>
          {
            this.props.events.map((event) => (
              <EventsItem key={event._id}  event={event} />
            ))
          }
          {/* <Text style={styles.sectionHeader}>
            Past
          </Text>
          {
            past.map((event) => (
              <EventsItem key={event.id}  event={event} />
            ))
          } */}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
  isGettingEvents: state.events.isGettingEvents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents: eventsActions.getEvents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);
