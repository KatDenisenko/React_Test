import * as actionTypes from '../actions/types';

const Content = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.SET_CONTENT:
            return {...action.data}
        case actionTypes.REMOVE_CONTENT:
            return {}
        case actionTypes.UPDATE_CONTENT:
            return {...action.data}//{...state,links:action.data}
        default:
            return state;
    }
}

export default Content;