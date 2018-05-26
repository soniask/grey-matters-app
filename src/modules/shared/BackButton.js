import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import { Icon } from 'react-native-elements';
import styles from '../../styles';

class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    this.props.history.goBack();
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={() => this.onPress()} 
        style={[styles.insideHeader]}
      >
        <Icon name='chevron-left' color='#282828' />
      </TouchableOpacity>
    );
  }
}

export default withRouter(BackButton);
