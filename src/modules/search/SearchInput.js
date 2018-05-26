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
import { searchActions } from '../../actions';
import SearchResults from './SearchResults';
import styles from '../../styles';

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{width: Dimensions.get('window').width - 50}}>
          <TextInput
            style={styles.insideHeader}
            placeholder='Search'
            clearButtonMode='while-editing'
            onChangeText={(text) => {
              this.searchTerm = text;
              if (this.searchTerm.length == 0) {
                this.props.clearSearch();
              }
            }}
            onSubmitEditing={() => {
              this.props.getSearch({ q: this.searchTerm});
            }}
          />
        </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearch: searchActions.getSearch,
  clearSearch: searchActions.clearSearch,
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchInput);

