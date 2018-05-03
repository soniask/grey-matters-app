import { menuConstants } from '../actions';

export const menuReducer = (state = 0, action) => {
    switch (action.type) {
        case menuConstants.SHOW:
            return {
                show: action.show
            };
        default:
            return state;
    }
}
