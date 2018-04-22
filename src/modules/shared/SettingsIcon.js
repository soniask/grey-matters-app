import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';

class SettingsIcon extends React.Component {
  render () {
    return (
      <Link to='/settings'>
        <Icon 
          name='settings'
          color= '#282828' />
      </Link>
    );
  }
} 

export default SettingsIcon;
