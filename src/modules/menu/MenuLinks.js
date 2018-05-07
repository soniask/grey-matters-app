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
    <Link 
      to="/profile"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.profileNavItem}>
      <View style={styles.profileNavItemView}>
        {props.user ? (
          <Avatar
            xlarge
            rounded
            activeOpacity={0.7}
            title={props.user.name.substring(0, 1)}
          />
        ) : (
          <Avatar
            xlarge
            rounded
            activeOpacity={0.7}
            icon={{name: 'person'}}
          />
        )}
        <Text style={styles.navItemText}>{props.user ? props.user.name : ""}</Text>
      </View>
    </Link>
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
      to="/basics"
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
    {/* <Link
      to="/store"
      underlayColor='#f0f4f7'
      onPress={() => props.showMenu(!props.show)}
      style={styles.navItem} >
      <Text style={styles.navItemText}>Store</Text>
    </Link> */}
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
