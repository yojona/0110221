import { Car } from "../store/cars/reducer";

type APIResult = {
  cars: Car[];
}

const API_BASE = "https://carsapp.azurewebsites.net";

export const fetchCars = async (): Promise<Car[]> => {
  try {
    const request = await fetch(`${API_BASE}/api/cars`);
    const data: APIResult = await request.json();
    return data.cars;
  } catch {
    return [];
  };
};
