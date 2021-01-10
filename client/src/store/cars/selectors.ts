import { createSelector } from '@reduxjs/toolkit';
import { IState } from '../index';

const store = (state: IState) => state;
export const getIsLoading = createSelector(store, (state) => state.loading);
export const getCars = createSelector(store, (state) => state.cars);
