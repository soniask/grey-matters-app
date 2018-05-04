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
    this.props.clearTerms();
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
                <Text style={styles.blue}>{this.props.content.creators[0].name}</Text>
              </View>
              <View style={styles.date}>
                <Text>{new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
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
