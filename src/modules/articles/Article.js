import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTMLView from 'react-native-htmlview';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from './ArticleStyles';
import { contentActions } from '../../actions/contentActions';
import Loading from '../shared/Loading';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  render() {
    const htmlContent = `<p>What H.M. lost, we now know,
		was a critical part of his identity.
		—Dr. Thomas Carew
    
    <a href="syna pse">synaps e</a>
Scientists have grappled with the question of how memories are stored for quite some time. Today many technologies exist that allow for a variety of approaches to answering this question, but one tactic that has withstood the test of time has been the study of amnesiacs1. Henry Molaison, referred to as patient H.M., was one such amnesiac who gained fame for his willingness to partake in scientific studies. Over 100 scientists and teams have studied H.M., making him one of the most heavily examined amnesiacs of all time1 . Over the years, study of H.M.’s brain helped to reveal some of the structural components of memory2 </p>.`

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
          <HTMLView 
            value={htmlContent}
            stylesheet={styles}
            onLinkPress={(url) => console.log('clicked link: ', url)}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  isGettingContent: state.content.isGettingContent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContent: contentActions.getContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Article);
