import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSheet } from 'react-native-ui-lib';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { contentActions } from '../../actions';
import SearchResults from './SearchResults';
import styles from './SearchStyles';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearContents();
  }

  render() {
    if (this.props.contents) {
      return (
        <SearchResults />
      )
    }
    return (
      <View>
        <Text 
          style={styles.suggestion}
          onPress={() => this.props.getContents()}
        >
          Of Computers and Brains
        </Text>
        <Text 
          style={styles.suggestion}
          onPress={() => this.props.getContents()}
        >
          Brain Computer Interfaces
        </Text>
        <Text 
          style={styles.suggestion}
          onPress={() => this.props.getContents()}
        >
          Tapeworms on the Brain
        </Text>
        <Text 
          style={styles.suggestion}
          onPress={() => this.props.getContents()}
        >
          Of Computers and Brains
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
  isGettingContents: state.content.isGettingContents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
  clearContents: contentActions.clearContents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);

