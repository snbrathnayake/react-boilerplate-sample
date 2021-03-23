import * as types from 'redux/types/comment-types';

export function fetchComments() {
    return {
        type: types.LOAD_COMMENTS
    }
};

export function setComments(comments) {
    return {
        type: types.LOADED_COMMENTS,
        payload: comments
    }
};
