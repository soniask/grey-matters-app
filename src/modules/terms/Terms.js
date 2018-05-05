import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native';
import { termsActions } from '../../actions';
import styles from './TermsStyles';
import Loading from '../shared/Loading';

class Terms extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTerms();
  }

  render() {
    if(this.props.isGettingTerms) {
      return (
        <Loading />
      )
    }
    if (!this.props.terms) {
      return (
        <Text>
          No Terms Available
        </Text>
      )
    }
    return (
      <ScrollView>
        <View style={[styles.content]}>
        {
          this.props.terms.map((term) => (
            <Link key={term._id} to={`/terms/${term._id}`}>
              <View style={styles.box}>
                <Text style={styles.word}>
                  {term.term}
                </Text>
                <Text style={styles.definition}>
                  {term.description}
                </Text>
              </View>
            </Link>
          ))
        }
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  terms: state.terms.terms,
  isGettingTerms: state.terms.isGettingTerms,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTerms: termsActions.getTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
