import React from 'react'
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import MenuLinks from './MenuLinks';

class Menu extends React.Component {
  constructor(props) {
    super (props);
  }

  render () {
    if (this.props.show) {
      return (
        <MenuLinks 
          show={this.props.show}
          />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  show: state.show,
});

export default connect(mapStateToProps)(Menu);
 