import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { actions } from '../../actions/actions';

class AppHeader extends React.Component {
  render () {
    return (
      <Icon 
        name={ this.props.show ? 'close' : 'menu' }
        onPress={ () => this.props.showMenu(!this.props.show) }/>
    );
  }
} 

const mapStateToProps = state => ({
  show: state.show,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
