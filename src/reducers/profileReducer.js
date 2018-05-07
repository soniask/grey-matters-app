import { profileConstants } from '../actions';

const PROFILE_INITIAL = {
	showBookmarkList: true,
}

export const profileReducer = (state = PROFILE_INITIAL, action) => {
	switch (action.type) {
		case profileConstants.SHOW_BOOKMARKS:
			return {
				showBookmarkList: true,
			};
		case profileConstants.SHOW_NOTES:
			return {
				showBookmarkList: false,
			};
		default:
			return state;
	}
}
