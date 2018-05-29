import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSheet } from 'react-native-ui-lib';
import {
	ScrollView,
	Text,
} from 'react-native';
import { searchActions } from '../../actions';
import ContentFeed from '../shared/ContentFeed';
import styles from './SearchStyles';

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.searchResults.length == 0) {
			return (
				<Text style={styles.message}>No content matched your search</Text>
			)
		}

		return (
			<ScrollView>
				<ContentFeed list={this.props.searchResults} />
			</ScrollView>
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
