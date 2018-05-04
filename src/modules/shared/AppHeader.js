import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import SearchInput from '../search/SearchInput';
import BackButton from './BackButton';
import SettingsIcon from './SettingsIcon';
import { routes } from '../../constants';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  getRightComponent() {
    const location = this.props.location.pathname;
    if (location === '/profile') {
      return <SettingsIcon />;
    } else if (['/signup', '/login', '/search', '/settings'].includes(location)) {
      return null;
    } else {
      return <SearchIcon />;
    }
  }

  getCenterComponent() {
    const location = this.props.location.pathname;
    const route = routes.find(route => route.path === location);
    if (location === '/search') {
      return (
        <SearchInput />
      )
    }
    if (route) {
      return { text: route.name, style: { color: '#282828' } };
    } else {
      return { text: 'GREY MATTERS', style: { color: '#282828' } };
    }
  }

  getLeftComponent() {
    const location = this.props.location.pathname;
    if (['/signup', '/login', '/search', '/settings'].includes(location) ||
        /\/\w+\/\w+/.test(location)) {
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
        outerContainerStyles={{ backgroundColor: '#fff', alignSelf: 'stretch' }}
      />
    );
  }
}

export default AppHeader;
