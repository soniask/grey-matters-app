import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-native';
import { Dialog, Button } from 'react-native-ui-lib';
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

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  handleTermPress(term) {
    let pattern = /<span>(.+)<\/span>/i;
    let match = term.match(pattern);
    console.log(match[1]);
    this.props.getTerms({ term: match[1] });
  }

  renderText(matchingString, matches) {
    return `${matches[1]}`;
  }

  render() {
//     if (this.props.terms) {
//       console.log(this.props.terms);
//     }
//     const body = `
//     What H.M. lost, we now know,
// 		was a critical part of his identity.
// 		—Dr. Thomas Carew
    
    
// Scientists have grappled with the question of <span>Synapse</span> how memories are stored for quite some time. Today many technologies exist that allow for a variety of approaches to answering this question, but one tactic that has withstood the test of time has been the study of amnesiacs1. Henry Molaison, referred to as patient H.M., was one such amnesiac who gained fame for his willingness to partake in scientific studies. Over 100 scientists and teams have studied H.M., making him one of the most heavily examined amnesiacs of all time1 . Over the years, study of H.M.’s brain helped to reveal some of the structural components of memory2`

    if (this.props.isGettingContent) {
      return (
        <Loading />
      );
    }

    if (!this.props.content) {
      return (
        <Text>
          No Content Available
        </Text>
      );
    }
    return (
      <View>
        <ScrollView>
          <Image style={styles.image} source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg'}}/>
          <View style={styles.container}>
            <Text style={styles.titleText}>
              {this.props.content.title}
            </Text>
            <View style={styles.metaData}>
              <View style={styles.author}>
                <Text>AUTHOR</Text>
                <Text style={styles.blue}>{this.props.content.creators[0]}</Text>
              </View>
              <View style={styles.date}>
                <Text>{this.props.content.publishTime}</Text>
              </View>
            </View>
            <ParsedText
              parse={
                [
                  {pattern: /<span>(.+)<\/span>/i, style: styles.blue, onPress: (term) => this.handleTermPress(term), renderText: this.renderText},
                ]
              }
            >
              {this.props.content.body}
            </ParsedText>
          </View>
        </ScrollView>
        {this.props.terms && this.props.terms.length > 0 ? (
          <Dialog
            visible={true}
            width="100%"
            height="35%"
            bottom
            centerH
            onDismiss={() => {console.log('Dismissed')}}
            animationConfig={{duration: 250}}
          >
            <View style={styles.dialog}>
              <Text style={styles.term}>{this.props.terms[0].term}</Text>
              <Link to={`/terms/${this.props.terms[0]._id}`}>
                <Text >{this.props.terms[0].description}</Text>
              </Link>
              <View >
                <Button text60 label="Done" link onPress={() => this.props.clearTerms()} />
              </View>
            </View>
          </Dialog>
        ) : null}
      </View>
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
