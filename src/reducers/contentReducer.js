import { contentConstants } from '../actions/contentActions';

const CONTENT_INITIAL = {
	contents: null,
	content: null,
  isGettingContents: false,
};

export const contentReducer = (state = CONTENT_INITIAL, action) => {
	switch (action.type) {
		case contentConstants.GET_CONTENTS_REQUEST:
			return {
				...state,
				isGettingContents: true,
			};
		case contentConstants.GET_CONTENTS_SUCCESS:
			return {
				...state,
				contents: action.payload,
				isGettingContents: false,
			};
		case contentConstants.GET_CONTENTS_FAILURE:
			return {
				...state,
				contents: null,
				isGettingContents: false,
			};
		case contentConstants.GET_CONTENT_REQUEST:
			return {
				...state,
				isGettingContent: true,
			};
		case contentConstants.GET_CONTENT_SUCCESS:
			return {
				...state,
				content: action.payload,
				isGettingContent: false,
			};
		case contentConstants.GET_CONTENT_FAILURE:
			return {
				...state,
				content: null,
				isGettingContent: false,
			};
		case contentConstants.GET_CREATOR_REQUEST:
			return {
				...state,
				isGettingCreator: true,
			}
		case contentConstants.GET_CREATOR_SUCCESS:
			return {
				...state,
				isGettingCreator: false,
				creator: action.payload,
			}
		case contentConstants.GET_CREATOR_FAILURE:
			return {
				...state,
				isGettingCreator: false,
				creator: null,
			}
		case contentConstants.CLEAR_CONTENTS:
			return {
				...state,
				contents: null,
			}
		default:
			return state;
	}
}
