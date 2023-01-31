import {delay, call, select, put, takeLatest} from "redux-saga/effects";
import {getCoordinates} from "./getCoordinates";
import {fetchCoordinatesError, fetchCoordinatesSuccess, selectQuery, setQuery} from "./coordinatesSlice";

function* fetchCoordinatesHandler() {
  const queryValue = yield select(selectQuery);

  if (!queryValue) {
    return;
  } else {
    try {
      yield delay(500);
      const coordinates = yield call(getCoordinates, queryValue);
      yield put(
        fetchCoordinatesSuccess(coordinates)
      );
    } catch (error) {
      yield put(fetchCoordinatesError());
    }
  }
}

export function* watchFetchCoordinates() {
  yield takeLatest(setQuery.type, fetchCoordinatesHandler);
}