import { actionConstants } from '../actions/actions'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case actionConstants.SHOW:
            return {
                show: action.show
            };
        default:
            return state;
    }
}

export default reducer;
