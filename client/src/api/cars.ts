import { Car } from "../store/cars/reducer";

export const fetchCars = async (): Promise<Car[]> => {
  return [  {
    "description": " motor adjustment",
    "make": " Honda ",
    "model": "CR-V",
    "estimatedate": "",
    "id": 3341,
    "image": "http://3.23.108.188/cars/CR-V.jpg"
  },
  {
    "description": " engine tuning ",
    "make": "Honda",
    "model": "Civic",
    "estimatedate": "2020/20/12",
    "id": 3342,
    "km": 90000,
    "image": "http://3.23.108.188/cars/civic.jpg"
  },
  {
    "description": " oil change ",
    "make": " Volkswaguen",
    "model": "Tiguan",
    "km": 13500,
    "id": 3343,
    "image": "http://3.23.108.188/cars/tiguan.jpg"
  },];
};
