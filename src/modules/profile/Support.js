import React, { Component } from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './SettingsStyles';

class Support extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.support} onPress={() => Linking.openURL('mailto:thalamus@uw.edu')}>
        Comments, questions, or concerns? Email us at
        <Text style={styles.blue}
        >{' thalamus@uw.edu'}</Text>
      </Text>
    );
  }
}

export default Support;
