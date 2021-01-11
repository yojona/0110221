import { Car } from "../store/cars/reducer";

type APIResult = {
  cars: Car[];
}

export const fetchCars = async (): Promise<Car[]> => {
  try {
    const request = await fetch('/api/cars', { mode: 'no-cors'});
    const data: APIResult = await request.json();
    return data.cars;
  } catch {
    return [];
  };
};
