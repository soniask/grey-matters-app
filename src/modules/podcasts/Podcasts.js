import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import ContentFeed from '../shared/ContentFeed';
import { contentActions } from '../../actions/contentActions';
import Loading from '../shared/Loading';

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContents({ type: 'podcast' });
  }

  render() {
    if (this.props.isGettingContents) {
      return (
        <Loading />
      );
    }

    if (!this.props.contents) {
      return (
        <Text>
          No Content Available
        </Text>
      );
    }
    return (
      <ContentFeed 
        list={this.props.contents}
        page='podcasts'
      />
    );
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
  isGettingContents: state.content.isGettingContents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
