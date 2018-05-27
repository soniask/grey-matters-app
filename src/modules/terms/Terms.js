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
import { colors } from '../../constants';
import styles from './TermsStyles';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';

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
    if (!this.props.terms || this.props.terms.length == 0) {
      return (
        <Unavailable message='No terms available' />
      )
    }
    this.props.terms.sort((term1, term2) => {
      return term1.term.localeCompare(term2.term);
    })
    return (
      <ScrollView>
        <View style={[styles.content]}>
        {
          this.props.terms.map((term) => (
            <Link key={term._id} to={`/terms/${term._id}`} underlayColor={colors.lightGrey}>
              <View style={styles.box}>
                <Text style={styles.word}>
                  {term.term}
                </Text>
                <Text style={styles.definition}>
                  {term.definition}
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
