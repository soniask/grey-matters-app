import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ParsedText from 'react-native-parsed-text';
import HTMLView from 'react-native-htmlview';
import {
	View,
	Image,
	Text,
	ScrollView,
} from 'react-native';
import styles from './HomeStyles';
import { contentActions } from '../../actions';
import { termsActions } from '../../actions';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';
import References from '../shared/References';
import TermDialog from '../articles/TermDialog';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
		this.props.clearTerms();
    this.props.getContents({ type: 'article', state: 'published' });
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
    if (this.props.isGettingContents) {
      return (
        <Loading />
      );
		}
		
    if (!this.props.contents || this.props.contents.length == 0) {
      return (
				<Unavailable message='Content unavailable' />
      );
		}

    return (
			<View>
				<ScrollView>
					<View>
						<Image style={styles.image} source={{uri: 'http://greymattersjournal.com/wp-content/uploads/2018/01/HM-700x757.png'}}/>
						<View style={styles.container}>
							<Text style={styles.title}>{this.props.contents[0].title}</Text>
							<View style={styles.metaData}>
								<View style={[styles.rightBorder, styles.metaDataBox]}>
									<Text>AUTHOR</Text>
									<Text style={styles.blue}>{this.props.contents[0].creators[0].name}</Text>
								</View>
								<View style={[styles.rightBorder, styles.metaDataBox]}>
									<Text>ARTIST</Text>
									<Text style={styles.blue}>{this.props.contents[0].creators[0].name}</Text>
								</View>
								<View style={[styles.metaDataBox]}>
									<Text>{ new Date(this.props.contents[0].publishTime).toLocaleDateString()}</Text>
								</View>
							</View>
							{/* <HTMLView
								value={this.props.contents[0].bodySlate}
								stylesheet={styles}
							/> */}
							<ParsedText
								parse={
									[
										{pattern: /<h2>([\S\s]+)<\/h2>/, style: styles.sectionTitle, renderText: this.renderText},
										{pattern: /<span>([\w\s]+)<\/span>/, style: styles.blue, onPress: (term) => this.handleTermPress(term), renderText: this.renderText},
									]
								}
							>
								{this.props.contents[0].body}
							</ParsedText>
							{this.props.contents[0].references && <References references={this.props.contents[0].references}/>}
						</View>
					</View>
				</ScrollView>
				{this.props.terms && <TermDialog terms={this.props.terms} />}
			</View>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
	isGettingContents: state.content.isGettingContents,
	terms: state.terms.terms,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getContents: contentActions.getContents,
	getTerms: termsActions.getTerms,
  clearTerms: termsActions.clearTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
