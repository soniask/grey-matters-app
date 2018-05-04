import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  WebView, 
  Platform
} from 'react-native';
import Loading from '../shared/Loading';
import { contentActions } from '../../actions';
import styles from '../articles/ArticleStyles';

class Video extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  render() {
    let youtubeLink = 'https://www.youtube.com/watch?v=NYIdmpp69MY'
    let embedLink = youtubeLink.replace('watch?v=', 'embed/');
    console.log(embedLink);

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
        <View style={{height: 300}}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: embedLink }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.metaData}>
            <View style={styles.author}>
              <Text>AUTHOR</Text>
              <Text style={styles.blue}>{this.props.content.creators[0].name}</Text>
            </View>
            <View style={styles.date}>
              <Text>{new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
            </View>
          </View>
          <Text>{this.props.content.body}</Text>
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Video);
