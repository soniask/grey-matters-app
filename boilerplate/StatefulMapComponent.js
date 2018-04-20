import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Button } from 'react-native';

import { alertActions } from '../../actions';

class StatefulMapComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>
        <h1>StatefulMapComponent</h1>
        <Button onPress={() => this.props.success('success!')}>Show Alert</Button>
      </Text>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...alertActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StatefulMapComponent);
