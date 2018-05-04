import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './ClubEventStyles';
import { Button } from 'react-native-elements';
import { eventsActions } from '../../actions';

class ClubEvent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }

  handleUrlPress() {
    // LinkingIOS.openURL('https://www.youtube.com/watch?v=NYIdmpp69MY');
  }

  render() {
    if(this.props.isGettingEvent) {
      return (
        <Text>
          Loading
        </Text>
      )
    }
    if (!this.props.event) {
      return (
        <Text>
          Event Unvailable
        </Text>
      )
    }
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p200x200/29066536_796994107154965_7780716167616548386_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHWwaX32bz-DEHRzw0vv0wbFJprwtnzLT9roboXnJODnrVgSRWySeLSxtZDdNJd4Fa3zp5DxOZz65kMkg7GxC21sPOS2E02FlqljeeFzb0rXg&oh=795833525dc92eb95dd79c5b9ce7eca2&oe=5B5727D4'}} style={styles.image}/>
        <View style={styles.mainContainer}>
          <View style={styles.metaData}>
            <View style={[styles.small, styles.metaDataBox]}>
              <Text>
              {new Date(this.props.event.dateStart).toLocaleDateString("en-US",{month: 'long', day: 'numeric'})}
              </Text>
            </View>
            <View style={[styles.small, styles.metaDataBox]}>
              <Text>
              {new Date(this.props.event.dateStart).toLocaleTimeString("en-US",{hour: 'numeric', minute: 'numeric'})}
              </Text>
            </View>
            <View style={[styles.large, styles.metaDataBox]}>
              <Text>{"LOCATION"}</Text>
            </View>
          </View>
          <Text style={styles.description}>{this.props.event.description}</Text>
          <Text style={styles.bold}>Watch it here!</Text>
          <Text 
            style={styles.blue}
            onPress={() => this.handleUrlPress()}
          >
            {'Live stream link'}
          </Text>
        </View>
        <Button
          title='RSVP'
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.events.event,
  isGettingEvent: state.events.isGettingEvent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvent: eventsActions.getEvent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClubEvent);
