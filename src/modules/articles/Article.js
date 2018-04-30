// import React from 'react';
// import {
//   Text,
//   ScrollView,
//   View,
//   Image
// } from 'react-native';
// import styles from './ArticleStyles';

// const Article = () => {
//   const article = {
//     imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
//     title: 'Food for Thought: How the Brain Controls What You Eat',
//     author: 'LEANN NGUYEN',
//     time: 'November 7, 2014',
//     text: `One of the most frequent decisions we make is what to eat, but just because it’s a common task doesn’t mean it’s a simple one—at least when it comes to what happens in our brains. When making food choices, our brains integrate multiple sensory inputs to come to the conclusion of what we should eat, as well as how much of it to eat.

// The food decision-making process begins before a single bite of food reaches our lips. After all, the first way we sense our food is through sight. Functional MRI (fMRI) scans have shown that looking at pictures of food activates multiple brain regions, most notably the orbitofrontal complex (OFC).1 This region, involved in decision-making, is also activated by the scent of food.2 In the OFC, these visual and olfactory stimuli are integrated to provide a measure of the pleasantness and desirability of the food—the greater the perceived pleasantness of the food, the greater the OFC activation.2

// The most important factor influencing the appeal of a food is, of course, how it tastes. fMRI scans of the human brain show that taste information is primarily processed in the anterior insula and frontal operculum, with secondary processing occurring in the OFC.2 Activations in the anterior insula and frontal operculum indicate both the identity and intensity of a taste.2 In the OFC and anterior cingulate cortex, this information is integrated with visual, olfactory, and even textural information to produce a measure of the pleasantness of the food’s flavor.2`,
//     key: 1,
//     type: 'article'
//   }
//   return (
//   <ScrollView>
//     <Image source={{uri: article.imgURI}} style={styles.image}/>
//     <View style={styles.container}>
//       <Text style={styles.titleText}>
//         {article.title}
//       </Text>
//       <View style={styles.metaData}>
//         <View style={styles.author}>
//           <Text>AUTHOR</Text>
//           <Text style={styles.blue}>{article.author}</Text>
//         </View>
//         <View style={styles.date}>
//           <Text>{article.time}</Text>
//         </View>
//       </View>
//       <Text>{article.text}</Text>
//     </View>
//   </ScrollView>
// )}

// export default Article;
//////////////////////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import styles from './ArticleStyles';

import { contentActions } from '../../actions/contentActions';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  render() {
    if (this.props.content) {
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
            <Text>{this.props.content.body}</Text>
          </View>
        </ScrollView>
      );
    }
    return (
      <Text>
        Placeholder
      </Text>
    )
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
