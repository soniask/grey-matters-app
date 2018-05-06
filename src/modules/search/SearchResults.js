import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSheet } from 'react-native-ui-lib';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
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
					<ContentFeed list={this.props.searchResults} />
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
											onPress={() => {
												this.props.toggleFilterOptions(!this.props.showFilterOptions);
												this.props.getSearch({ q: this.props.searchTerm, type: 'article' })
											}}
										>
											Articles
										</Text>
										<Text
											style={styles.option}
											onPress={() => {
												this.props.toggleFilterOptions(!this.props.showFilterOptions);
												this.props.getSearch({ q: this.props.searchTerm, type: 'podcast' })
											}}
										>
											Podcasts
										</Text>
										<Text
											style={styles.option}
											onPress={() => {
												this.props.toggleFilterOptions(!this.props.showFilterOptions);
												this.props.getSearch({ q: this.props.searchTerm, type: 'video' })
											}}
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
  searchResults: state.search.searchResults,
  searchTerm: state.search.searchTerm,
  showSortOptions: state.search.showSortOptions,
  showFilterOptions: state.search.showFilterOptions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearch: searchActions.getSearch,
  toggleSortOptions: searchActions.toggleSortOptions,
  toggleFilterOptions: searchActions.toggleFilterOptions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
