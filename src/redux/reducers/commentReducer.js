import * as types from 'redux/types/comment-types';

const defaultState = {
    comments: []
};


const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.LOADED_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };

        default:
            return state;
    }
};

export default commentReducer;