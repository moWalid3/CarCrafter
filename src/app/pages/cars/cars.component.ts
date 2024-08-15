import { Component, effect, inject, signal } from '@angular/core';
import { CarsService } from '../../core/services/cars.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarsFilterComponent } from './cars-filter/cars-filter.component';
import { ShowCarsComponent } from "./show-cars/show-cars.component";
import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    // MatButtonModule,
    // MatInputModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatSelectModule,
    CarsFilterComponent,
    ShowCarsComponent
],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  private carsService = inject(CarsService);
  // finalCars = signal<Car[]>(this.carsService.allCars()!)
  finalCars = signal<Car[]>([])

  constructor() {
    effect(() => {
      console.log(this.finalCars());
    })
  }

  onFilter(filteredCars: Car[]) {
    console.log("alskfjlask;djf");
    this.finalCars.set(filteredCars);
  }
}
