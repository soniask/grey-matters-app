import { profileConstants } from '../actions';

const PROFILE_INITIAL = {
	showBookmarkList: true,
}

export const profileReducer = (state = PROFILE_INITIAL, action) => {
	switch (action.type) {
		case profileConstants.SHOW_BOOKMARKS:
			return {
				...state,
				showBookmarkList: true,
			};
		case profileConstants.SHOW_NOTES:
			return {
				...state,
				showBookmarkList: false,
			};
		default:
			return state;
	}
}
