import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { reducer } from './cars/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type IState = ReturnType<typeof reducer>
export default store;
