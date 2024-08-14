export interface Car {
	id: string;
	name: string;
	imageUrl: string;
	brand: string;
	year: number;
	price: number;
	mileage: number;
	color: string;
	transmission: string;
	fuelType: string;
	description: string;
}

export interface CartCar extends Car{
  selectedColor: string,
  quantity: number,
  pickupDate: string,
}
