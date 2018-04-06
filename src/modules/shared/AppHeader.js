import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import store from '../../store';
import { actions } from '../../actions/actions';

class AppHeader extends React.Component {
  render () {
    return (

        <Icon 
          name={ this.props.show ? 'close' : 'menu' }
          onPress={ () => store.dispatch(actions.showMenu(!this.props.show)) }/>

    );
  }
} 

const mapStateToProps = state => ({
  show: state.show,
});

export default connect(mapStateToProps)(AppHeader);
