import {all} from "redux-saga/effects";
import {watchFetchCoordinates} from "../components/coordinates/coordinatesSaga";
import {watchFetchRealTime} from "../features/Realtime/realTimeSaga";

export default function* rootSaga() {
  yield all([
    watchFetchCoordinates(),
    watchFetchRealTime(),
  ])
};