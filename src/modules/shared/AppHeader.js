import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';
import MenuIcon from './MenuIcon';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        leftComponent={<MenuIcon />}
        centerComponent={{ text: 'GREY MATTERS', style: { color: '#282828' } }}
        rightComponent={{ icon: 'search', color: '#282828' }}
        outerContainerStyles={{ backgroundColor: '#E6E6E8', alignSelf: 'stretch' }}
      />
    );
  }
}

export default AppHeader;
