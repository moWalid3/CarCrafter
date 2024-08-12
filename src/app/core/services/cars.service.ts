import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpClient = inject(HttpClient);

  getCarOffers() {
    return this.httpClient.get<Car[]>('c/4bbf-4125-4467-8ab5');
  }
}
