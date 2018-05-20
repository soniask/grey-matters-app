import React from 'react';
import {
	Text,
} from 'react-native';

import styles from '../../styles';

const Unavailable = (props) => (
  <Text style={styles.unavailable}>
    { props.message }
  </Text>
)

export default Unavailable;
