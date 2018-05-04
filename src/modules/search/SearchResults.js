import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSheet } from 'react-native-ui-lib';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { contentActions } from '../../actions';
import { searchActions } from '../../actions';
import ContentFeed from '../shared/ContentFeed';
import styles from './SearchStyles';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<View>
				<View style={styles.resultsContainer}>
					<ContentFeed list={this.props.contents} />
				</View>
					<View style={styles.tabsContainer}>
						<View style={styles.tab}>
							<Text 
								style={styles.tabText}
								onPress={() => this.props.toggleSortOptions(!this.props.showSortOptions)}
							>
								Sort
							</Text>
							{
								this.props.showSortOptions ? (
									<View style={styles.optionsContainer}>
										<Text 
											style={styles.option}
											onPress={() => this.props.toggleSortOptions(!this.props.showSortOptions)}
										>
											Most Popular
										</Text>
										<Text
											style={styles.option}
											onPress={() => this.props.toggleSortOptions(!this.props.showSortOptions)}
										>
											Most Recent
										</Text>
									</View>
								) : null
							}
						</View>
						<View style={styles.tab}>
							<Text 
								style={styles.tabText}
								onPress={() => this.props.toggleFilterOptions(!this.props.showFilterOptions)}
							>
								Filter
							</Text>
							{
								this.props.showFilterOptions ? (
									<View style={styles.optionsContainer}>
										<Text 
											style={styles.option}
											onPress={() => this.props.toggleFilterOptions(!this.props.showFilterOptions)}
										>
											Articles
										</Text>
										<Text
											style={styles.option}
											onPress={() => this.props.toggleFilterOptions(!this.props.showFilterOptions)}
										>
											Podcasts
										</Text>
										<Text
											style={styles.option}
											onPress={() => this.props.toggleFilterOptions(!this.props.showFilterOptions)}
										>
											Videos
										</Text>
									</View>
								) : null
							}
						</View>
					</View>
			</View>
		)
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
  isGettingContents: state.content.isGettingContents,
  showSortOptions: state.search.showSortOptions,
  showFilterOptions: state.search.showFilterOptions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
  clearContents: contentActions.clearContents,
  toggleSortOptions: searchActions.toggleSortOptions,
  toggleFilterOptions: searchActions.toggleFilterOptions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
