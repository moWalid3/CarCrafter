import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpClient = inject(HttpClient);
  allCars = toSignal(this.getAllCars());

  private getAllCars () {
    return this.httpClient.get<Car[]>('c/1d29-6c82-4833-b398');
  }

  getCarOffers() {
    return this.httpClient.get<Car[]>('c/4bbf-4125-4467-8ab5');
  }
}
