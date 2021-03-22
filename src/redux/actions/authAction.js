import * as types from 'redux/types/auth-types';


export function getLoggedInUserInfo() {
    return {
        type: types.LOAD_AUTH
    }
};

export function updateLoggedInUserInfo(userInfo) {
    return {
        type: types.LOAD_AUTH,
        payload: userInfo
    }
};