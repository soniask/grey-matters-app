import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Button } from 'react-native';
import ContentFeed from '../shared/ContentFeed';
import { contentActions } from '../../actions/contentActions';

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContents({ type: 'article', state: 'published' });
  }

  render() {
    if (this.props.isGettingContents) {
      return (
        <Text>
          Loading
        </Text>
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
        page='articles'
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

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
