import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { menuActions } from '../../actions';
import styles from '../../styles';
import { colors } from '../../constants';

class MenuIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.showMenu(!this.props.show)}
        style={[styles.insideHeader]}
      >
        <Icon
          name={this.props.show ? 'close' : 'menu'}
        />
      </TouchableOpacity>
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
