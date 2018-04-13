import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    // flex: 1,
    fontSize: 20,
    alignItems: 'center',
  },
  nav: {
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#282828',
  },
  navItem: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    borderTopColor: '#ffffff',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  profileNavItem: {
    flex: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  profileNavItemView: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItemText: {
    color: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default styles;
