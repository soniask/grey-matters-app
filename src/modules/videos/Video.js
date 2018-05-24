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
import Unavailable from '../shared/Unavailable';
import { contentActions } from '../../actions';
import styles from '../articles/ArticleStyles';
import References from '../shared/References';

class Video extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
        <Unavailable message='Video unavailable' />
      );
    }

    return (
      <View>
        <View style={{height: 300}}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: this.props.content.url.replace('watch?v=', 'embed/') }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.titleText}>{this.props.content.title}</Text>
          <View style={styles.metaData}>
            <View style={styles.author}>
              <Text>AUTHOR</Text>
              {/* <Text style={styles.blue}>{this.props.content.creators[0].name}</Text> */}
            </View>
            <View style={styles.date}>
              <Text>{new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
            </View>
          </View>
          <Text>{this.props.content.body}</Text>
          {this.props.content.references && <References references={this.props.content.references}/>}
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
