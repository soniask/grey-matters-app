import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

class SearchIcon extends React.Component {
  render () {
    return (
      <Icon 
        name='search'
        color= '#282828' />
    );
  }
} 

export default SearchIcon;
