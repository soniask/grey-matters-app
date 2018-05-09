import { learningConstants } from '../actions';

const LEARNING_INITIAL = {
	imageIndex: 0,
}

export const learningReducer = (state = LEARNING_INITIAL, action) => {
	switch (action.type) {
		case learningConstants.CHANGE_IMAGE:
			return {
				imageIndex: action.imageIndex
			}
		default:
			return state;
	}
}