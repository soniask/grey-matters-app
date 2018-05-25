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
		case profileConstants.SHOW_PRIVACY_POLICY:
			console.log('privacy policy reducer')
			return {
				...state,
				privacyPolicyVisible: true,
			};
		case profileConstants.HIDE_PRIVACY_POLICY:
			return {
				...state,
				privacyPolicyVisible: false,
			};
		default:
			return state;
	}
}
