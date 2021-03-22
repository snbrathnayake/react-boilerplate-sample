import * as types from 'redux/types/auth-types';

const defaultState = {
    isLoggedIn: false
};


const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.LOADED_AUTH:
            return {
                ...state,
                step: action.payload
            };

        default:
            return state;
    }
};

export default authReducer;