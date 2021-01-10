import { takeLatest } from "redux-saga/effects";
import { actions } from "../store/cars/reducer";
import { fetchCarsEffect } from "../store/cars/sagas";

export default function* root() {
  yield takeLatest(actions.fetchCars.type, fetchCarsEffect);
};
