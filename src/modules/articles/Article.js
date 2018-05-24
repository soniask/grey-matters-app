import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-native';
import ParsedText from 'react-native-parsed-text';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from './ArticleStyles';
import { contentActions } from '../../actions';
import { termsActions } from '../../actions';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';
import References from '../shared/References';
import TermDialog from './TermDialog';
import ArticleView from './ArticleView';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearTerms();
    this.props.getContent(this.props.match.params.id);
  }

  render() {
    if (this.props.isGettingContent) {
      return (
        <Loading />
      );
    }

    if (!this.props.content) {
      return (
        <Unavailable message='Article unavailable' />
      );
    }
    
    return (
      <ArticleView content={this.props.content} /> 
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  isGettingContent: state.content.isGettingContent,
  terms: state.terms.terms,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContent: contentActions.getContent,
  getTerms: termsActions.getTerms,
  clearTerms: termsActions.clearTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Article);
