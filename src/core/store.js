import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware  from "redux-saga";
import rootSaga from "./rootSaga";
import coordinatesReducer from "../components/coordinates/coordinatesSlice";
import realTimeReducer from "../features/Realtime/realTimeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
    realTime: realTimeReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;