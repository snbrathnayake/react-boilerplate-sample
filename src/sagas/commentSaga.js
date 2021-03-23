import { all, call, put, takeEvery } from "redux-saga/effects";
import * as types from 'redux/types/comment-types';
import { fetchCommentJson } from "services/CommentService";
import { setComments } from "redux/actions/commentAction";

function* asyncFectchRequest() {
    try {
        const results = yield call(fetchCommentJson);
        yield put(setComments(results))
    } catch (error) {
        yield console.log("ERROR")
    }
}

function* watchCommentSaga() {
    yield takeEvery(types.LOAD_COMMENTS, asyncFectchRequest)
}

export default function* comment() {
    yield all([
        watchCommentSaga(),
    ]);
}