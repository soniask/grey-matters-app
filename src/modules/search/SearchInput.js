import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSheet } from 'react-native-ui-lib';
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { contentActions } from '../../actions';
import SearchResults from './SearchResults';
import styles from './SearchStyles';

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{width: Dimensions.get('window').width - 50}}>
          <TextInput
            placeholder='Search'
            clearButtonMode='while-editing'
            onChangeText={(text) => this.searchTerm = text}
            onSubmitEditing={() => {
              console.log(this.searchTerm);
              this.props.getContents();
            }}
          />
        </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchInput);

