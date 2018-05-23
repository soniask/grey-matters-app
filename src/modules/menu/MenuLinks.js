import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';

import { Link } from 'react-router-native';
import { Avatar } from 'react-native-elements';
import { menuActions } from '../../actions';
import styles from '../../styles.js';

const MenuLinks = (props) => (
  <View style={styles.nav}>
    <View style={styles.profileNavItem}>
      { props.user ? (
        <View style={styles.profileNavItemView}>
          <Link 
            to="/userProfile"
            underlayColor='#f0f4f7'
            onPress={() => props.showMenu(!props.show)}
          >
            <Avatar
              xlarge
              rounded
              activeOpacity={0.7}
              title={props.user.name.substring(0, 1)}
              containerStyle={{marginBottom: 20}}
            />
          </Link>
          <Text style={styles.navItemText}>{props.user.name}</Text>
        </View>
      ) : (
        <View style={styles.profileNavItemView}>
          <Link 
            to="/userProfile"
            underlayColor='#f0f4f7'
            onPress={() => props.showMenu(!props.show)}
          >
            <Avatar
              xlarge
              rounded
              activeOpacity={0.7}
              icon={{name: 'person'}}
              containerStyle={{marginBottom: 20}}
            />
          </Link>
          <Link 
            to="/login"
            underlayColor='#f0f4f7'
            onPress={() => props.showMenu(!props.show)}
          >
            <Text style={styles.navItemText}>Log In</Text>
          </Link>
      </View>
      )}
    </View>
    <Link
      to="/"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem}>
      <Text style={styles.navItemText}>Home</Text>
    </Link>
    <Link
      to="/articles"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem}>
      <Text style={styles.navItemText}>Articles</Text>
    </Link>
    <Link
      to="/podcasts"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem}>
      <Text style={styles.navItemText}>Podcasts</Text>
    </Link>
    <Link
      to="/videos"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem} >
      <Text style={styles.navItemText}>Videos</Text>
    </Link>
    <Link
      to="/events"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem} >
      <Text style={styles.navItemText}>Events</Text>
    </Link>
    <Link
      to="/learningsection"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem} >
      <Text style={styles.navItemText}>The Basics</Text>
    </Link>
    <Link
      to="/terms"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem} >
      <Text style={styles.navItemText}>Glossary</Text>
    </Link>
  </View>
)

const mapStateToProps = state => ({
  show: state.menu.show,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showMenu: menuActions.showMenu,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuLinks);
