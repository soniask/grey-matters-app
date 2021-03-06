import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';
import { menuActions } from '../../actions';
import styles from '../../styles';
import { colors } from '../../constants';


class SearchIcon extends React.Component {
  constructor(props) {
	  super(props);
  }
  
  render () {
    return (
      <Link 
        to='/search'
        onPress={() => this.props.showMenu(false)}
        underlayColor={colors.lightGrey}
        style={styles.insideHeader}
      >
        <Icon 
          name='search' 
          color= '#282828'
        />
      </Link>
    );
  }
} 

const mapDispatchToProps = dispatch => bindActionCreators({
  showMenu: menuActions.showMenu,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchIcon);
