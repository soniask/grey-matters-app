import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';

class SearchIcon extends React.Component {
  render () {
    return (
      <Link to='/search'>
        <Icon name='search' color= '#282828' />
      </Link>
    );
  }
} 

export default SearchIcon;
