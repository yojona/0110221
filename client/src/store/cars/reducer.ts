import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Car = {
  description: string,
  make: string,
  model: string,
  estimatedate?: string,
  id: number,
  km?: number,
  image: string,
  clientName?: string
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
    updateCar: (state, action: PayloadAction<Car>) => {
      const index = state.cars.findIndex((c) => c.id === action.payload.id);

      if (index >= 0) {
        state.cars[index] = action.payload
      }
    },
  }
});

export const { reducer, actions } = carListSlice;
