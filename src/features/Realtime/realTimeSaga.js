import {call, select, put, takeLatest} from "redux-saga/effects";
import {fetchRealTimeError, fetchRealTimeSuccess, selectRealTimeDataCoordinates, setCoordinates} from "./realTimeSlice";
import {getRealTimeData} from "./getRealTimeData";

function* fetchRealTimeDataHandler() {
  const coordinates = yield select(selectRealTimeDataCoordinates);
  const lat = coordinates.lat;
  const lon = coordinates.lon;

  if (!coordinates) {
    return null;
  } else {
    try {
      const weatherData = yield call(getRealTimeData, lat, lon);
      yield put(
        fetchRealTimeSuccess(weatherData)
      );
    } catch (error) {
      yield put(fetchRealTimeError());
    }
  }
}

export function* watchFetchRealTime() {
  yield takeLatest(setCoordinates.type, fetchRealTimeDataHandler);
}