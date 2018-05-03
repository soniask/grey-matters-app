import React, { Component } from 'react';
import { Text } from 'react-native';

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>
        StatefulComponent
      </Text>
    );
  }
}

export default StatefulComponent;
