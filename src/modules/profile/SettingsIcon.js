import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

class SettingsIcon extends React.Component {
  render () {
    return (
      <Icon 
        name='ios-settings-outline'
        type='ionicon'
        color= '#282828' />
    );
  }
} 

export default SettingsIcon;