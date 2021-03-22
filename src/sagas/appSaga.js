import { all, takeEvery } from "redux-saga/effects";
import * as types from 'redux/types/app-types';

// worker func
function* asyncFectchRequest() {
    try {
        // TODO axios call api ??
        yield console.log("been called : asyncFectchRequest()")
    } catch (error) {
        console.log("error " + error)
    }
}

// watcher func
function* watchAppSaga() {
    yield takeEvery(types.LOAD_APP, asyncFectchRequest)
}


export default function* app() {
    yield all([
        watchAppSaga(),
    ]);
}