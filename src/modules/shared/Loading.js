import React from 'react';
import {
	Text,
} from 'react-native';

import styles from './LoadingStyles';

const Loading = (props) => (
  <Text style={styles.title}>
    {props.text ? props.text : 'Loading...'}
  </Text>
)

export default Loading;
