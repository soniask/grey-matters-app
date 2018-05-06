import { searchConstants } from '../actions';

const SEARCH_INITIAL = {
	showSortOptions: false,
	showFilterOptions: false,
};

export const searchReducer = (state = SEARCH_INITIAL, action) => {
    switch (action.type) {
		case searchConstants.SEARCH_REQUEST:
			return {
				...state,
				searchTerm: action.searchTerm,
				isGettingSearch: true,
			};
		case searchConstants.SEARCH_SUCCESS:
			return {
				...state,
				searchResults: action.payload,
				isGettingSearch: false,
			};
		case searchConstants.SEARCH_FAILURE:
			return {
				...state,
				searchResults: null,
				isGettingSearch: false,
			};
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
		case searchConstants.CLEAR_SEARCH:
			return {
				...state,
				searchResults: null,
			};
        default:
            return state;
    }
}
