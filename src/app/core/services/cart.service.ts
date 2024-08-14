import { Injectable, signal } from '@angular/core';
import { Car, CartCar } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cars = signal<CartCar[]>([]);
  cartCars = this.cars.asReadonly();

  addCarToCart(car: CartCar) {
    this.cars.update((oldCars) => {
      const index = oldCars.findIndex((oldCar) => (oldCar.id === car.id) && (oldCar.selectedColor === car.selectedColor));
      if (index !== -1) oldCars.splice(index, 1);
      return [...oldCars, car];
    });

    this.updateLocalStorage();
  }

  deleteCarFromCart(index: number) {
    this.cars.update(oldCars => {
      oldCars.splice(index, 1);
      return oldCars;
    });

    this.updateLocalStorage();
  }

  updateCarQuantity(index: number, updatedCar: CartCar) {
    this.cars.update(cars => {
      cars.splice(index, 1, updatedCar);
      return cars;
    });

    this.updateLocalStorage();
  }

  getCartCarsFromLocalStorage() {
    if (localStorage.getItem('cartCars') !== null)
      this.cars.set(JSON.parse(localStorage.getItem('cartCars')!));
  }

  private updateLocalStorage() {
    localStorage.setItem('cartCars', JSON.stringify(this.cars()));
  }
}
