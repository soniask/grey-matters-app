import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';
import { menuActions } from '../../actions';
import styles from '../../styles';
// import { colors } from '../../constants';

class SettingsIcon extends React.Component {
  constructor(props) {
	  super(props);
  }
  
  render () {
    return (
      <Link 
        to='/settings'
        onPress={() => this.props.showMenu(false)}
        underlayColor={'white'}
        style={styles.insideHeader}
      >
        <Icon 
          name='settings'
          color= '#282828' />
      </Link>
    );
  }
} 

const mapDispatchToProps = dispatch => bindActionCreators({
  showMenu: menuActions.showMenu,
}, dispatch);

export default connect(null, mapDispatchToProps)(SettingsIcon);
