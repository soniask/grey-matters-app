import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import BackButton from './BackButton';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  getRightComponent() {
    const location = this.props.location.pathname;
    if (location === '/profile') {
      return { icon: 'settings', color: '#282828' };
    } else if (location === '/search') {
      return null;
    } else {
      return <SearchIcon />;
    }
  }

  getCenterComponent() {
    const location = this.props.location.pathname;
    if (location === '/search') {
      return { text: 'SEARCH', style: { color: '#282828' } }
    } else {
      return { text: 'GREY MATTERS', style: { color: '#282828' } }
    }
  }

  getLeftComponent() {
    const location = this.props.location.pathname;
    if (location === '/search') {
      return <BackButton />;
    } else {
      return <MenuIcon />;
    }
  }

  render() {
    return (
      <Header
        leftComponent={this.getLeftComponent()}
        centerComponent={this.getCenterComponent()}
        rightComponent={this.getRightComponent()}
        outerContainerStyles={{ backgroundColor: '#E6E6E8', alignSelf: 'stretch' }}
      />
    );
  }
}

export default AppHeader;
