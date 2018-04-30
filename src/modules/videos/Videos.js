// import React from 'react';
// import ContentFeed from '../shared/ContentFeed';

// const Videos = () => {
//   videos = [
//     {
//       imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
//       title: 'Tapeworms on the Brain',
//       author: 'BENJAMIN CORDY',
//       time: '15 minutes',
//       description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
//       key: 1
//     },
//     {
//       imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
//       title: 'Tapeworms on the Brain',
//       author: 'BENJAMIN CORDY',
//       time: '15 minutes',
//       description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
//       key: 2
//     },
//     {
//       imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
//       title: 'Tapeworms on the Brain',
//       author: 'BENJAMIN CORDY',
//       time: '15 minutes',
//       description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
//       key: 3
//     },
//     {
//       imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
//       title: 'Tapeworms on the Brain',
//       author: 'BENJAMIN CORDY',
//       time: '15 minutes',
//       description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
//       key: 4
//     },
//     {
//       imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
//       title: 'Tapeworms on the Brain',
//       author: 'BENJAMIN CORDY',
//       time: '15 minutes',
//       description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
//       key: 5
//     },
//   ]
//   return (
//     <ContentFeed list={videos}/>
// )}

// export default Videos;

///////////////////////

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
    this.props.getContents({ type: 'video' });
  }

  render() {
    console.log(this.props.contents)
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
        page='videos'
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


