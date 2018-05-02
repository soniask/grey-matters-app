import React, { Component } from 'react';
import { Header, FormInput, Icon } from 'react-native-elements';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
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
    } else if (['/signup', '/login', '/search'].includes(location)) {
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
        <FormInput
          placeholder='Search'
          leftIcon={
            <Icon name='search' color= '#282828' />
          }
        />
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
    if (['/signup', '/login', '/search'].includes(location)) {
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
