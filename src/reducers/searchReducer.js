import { searchConstants } from '../actions';

const SEARCH_INITIAL = {
	showSortOptions: false,
	showFilterOptions: false,
};

export const searchReducer = (state = SEARCH_INITIAL, action) => {
	switch (action.type) {
		case searchConstants.SHOW_SORT_OPTIONS:
			return {
				...state,
				showSortOptions: action.show,
			};
		case searchConstants.SHOW_FILTER_OPTIONS:
			return {
				...state,
				showFilterOptions: action.show,
			};
		default:
			return state;
	}
}
