import {all} from "redux-saga/effects";
import {watchFetchCoordinates} from "../components/coordinates/coordinatesSaga";

export default function* rootSaga() {
  yield all([
    watchFetchCoordinates(),
  ])
};