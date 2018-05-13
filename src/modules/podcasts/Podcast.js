import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-native';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from '../articles/ArticleStyles';
import { contentActions } from '../../actions';
import Loading from '../shared/Loading';
import References from '../shared/References';
import MyPlayerBar from '../podcasts/PodcastPlayer';
import { creatorTitles } from '../../constants';


class Podcast extends Component {
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
        <Text>
          Video Unavailable
        </Text>
      );
    }

    return (
      <ScrollView>
        <Image style={styles.image} source={{ uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg' }} />
        {/* <MyPlayerBar /> */}
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {this.props.content.title}
          </Text>
          <View style={styles.metaData}>
            <View style={[styles.rightBorder, styles.metaDataBox]}>
              <Text>{creatorTitles[this.props.content.type].toUpperCase()}</Text>
              <Text style={styles.blue}>{this.props.content.creators[0]}</Text>
            </View>
            <View style={[styles.rightBorder, styles.metaDataBox]}>
              <Text>ARTIST</Text>
              <Text style={styles.blue}>{this.props.content.creators[0]}</Text>
            </View>
            <View style={[styles.metaDataBox]}>
              <Text>{new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
            </View>
          </View>
          <Text>{this.props.content.body}</Text>
          {this.props.content.references && <References references={this.props.content.references} />}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContent: contentActions.getContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Podcast);
