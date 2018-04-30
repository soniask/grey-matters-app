import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { menuActions } from '../../actions';

class MenuIcon extends React.Component {
  render () {
    return (
      <Icon 
        name={ this.props.show ? 'close' : 'menu' }
        onPress={ () => this.props.showMenu(!this.props.show) }/>
    );
  }
} 

const mapStateToProps = state => ({
  show: state.menu.show,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  showMenu: menuActions.showMenu,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);
