import React, { Component } from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
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
    if (location === '/userProfile') {
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
      return { text: route.name, style: { color: '#282828', fontSize: 17 } };
    } else {
      return (
        <Link to="/" >
          <Text style={{ color: '#282828', fontSize: 17 }}>Grey Matters</Text>
        </Link>
      )
    }
  }

  getLeftComponent() {
    const location = this.props.location.pathname;
    if (['/signup', '/login', '/search', '/settings', '/editProfile', '/changePassword', '/privacyPolicy'].includes(location) ||
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
