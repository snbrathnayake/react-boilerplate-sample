import { all } from "redux-saga/effects";
import auth from "sagas/authSaga";
import app from "sagas/appSaga";
import comment from "sagas/commentSaga";

export default function* rootSaga() {
    yield all([
        auth(),
        app(),
        comment()
    ])
}