import { all, takeEvery } from "redux-saga/effects";
import * as types from 'redux/types/auth-types';

// worker func
function* asyncFectchRequest() {
    try {
        // TODO axios call api ??
        yield console.log("been called : asyncFectchRequest()")
    } catch (error) {
        console.log("error " + error)
    }
}
// worker func
function* asyncUpdateRequest() {
    try {
        yield console.log("been called : asyncUpdateRequest()")
    } catch (error) {
        console.log("error " + error)
    }
}

// watcher func
function* watchAuthSaga() {
    yield takeEvery(types.LOAD_AUTH, asyncFectchRequest)
}
// watcher func
function* watchUpdateAuthSaga() {
    yield takeEvery(types.UPDATE_LOGGED_USER_INFO, asyncUpdateRequest)
}



export default function* auth() {
    yield all([
        watchAuthSaga(),
        watchUpdateAuthSaga(),
    ])
}