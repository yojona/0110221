import { put } from 'redux-saga/effects';
import { fetchCars } from '../../api/cars';
import { actions } from "./reducer";

export function* fetchCarsEffect() {
  const cars = yield fetchCars();
  yield put(actions.receiveCars(cars));
};
