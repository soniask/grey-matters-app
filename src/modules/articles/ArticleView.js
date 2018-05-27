import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoHeightImage from 'react-native-auto-height-image';
import ParsedText from 'react-native-parsed-text';
import { Link } from 'react-router-native';
import {
	Dimensions,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import { termsActions } from '../../actions';
import styles from './ArticleStyles';
import References from '../shared/References';
import TermDialog from './TermDialog';

class ArticleView extends Component {
	constructor(props) {
		super(props);
	}

	handleTermPress(term) {
    let pattern = /<span>([\w\s]+)<\/span>/;
    let match = term.match(pattern);
    this.props.getTerms({ term: match[1] });
  }

  renderText(matchingString, matches) {
    return `${matches[1]}`;
  }

	render() {
    return (
      <View>
        <ScrollView>
          <AutoHeightImage width={Dimensions.get('window').width} source={{uri: 'http://greymattersjournal.com/wp-content/uploads/2018/01/HM-700x757.png'}}/>
          <View style={styles.container}>
            <Text style={styles.titleText}>
              {this.props.content.title}
            </Text>
            <View style={styles.metaData}>
              <View style={[styles.rightBorder, styles.metaDataBox]}>
                <Text>AUTHOR</Text>
                {
                  this.props.content.creators.map((creator) => (
                    <Link
                      to={`/creatorProfile/${creator._id}`}
                      underlayColor='white'
                      key={creator._id}
                    >
                      <Text style={styles.blue}>{creator.name}</Text>
                    </Link>
                  ))
                }
                {/* <Text style={styles.blue}>{this.props.content.creators[0]}</Text> */}
              </View>
              <View style={[styles.rightBorder, styles.metaDataBox]}>
                <Text>ARTIST</Text>
                {
                  this.props.content.artists.map((artist) => (
                    <Link
                      to={`/creatorProfile/${artist._id}`}
                      underlayColor='white'
                      key={artist._id}
                    >
                      <Text style={styles.blue}>{artist.name}</Text>
                    </Link>
                  ))
                }
                {/* <Text style={styles.blue}>{this.props.content.creators[0]}</Text> */}
              </View>
              <View style={[styles.metaDataBox]}>
                <Text>{ new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
              </View>
            </View>
            <ParsedText
              parse={
                [
                  {pattern: /<h2>([\S\s]+)<\/h2>/, style: styles.sectionTitle, renderText: this.renderText},
                  {pattern: /<span>([\w\s]+)<\/span>/, style: styles.blue, onPress: (term) => this.handleTermPress(term), renderText: this.renderText},
                ]
              }
            >
              {this.props.content.body}
            </ParsedText>
            {this.props.content.references && <References references={this.props.content.references}/>}
          </View>
        </ScrollView>
        {this.props.terms && <TermDialog terms={this.props.terms} />}
      </View>
    );
	}
}

const mapStateToProps = state => ({
  terms: state.terms.terms,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTerms: termsActions.getTerms,
  clearTerms: termsActions.clearTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
  