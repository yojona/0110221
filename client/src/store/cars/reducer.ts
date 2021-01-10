import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Car = {
  description: string,
  make: string,
  model: string,
  estimatedate?: string,
  id: number,
  km?: number,
  image: string
};

type initialStateType = {
  cars: Car[];
  loading: boolean;
};

const initialState: initialStateType = {
  cars: [],
  loading: false,
};

const carListSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
    fetchCars: (state) => {
      state.loading = true;
    },
    receiveCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
      state.loading = false;
    },
  }
});

export const { reducer, actions } = carListSlice;
