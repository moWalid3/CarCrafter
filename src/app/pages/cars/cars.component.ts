import { Component } from '@angular/core';
import { CarsFilterComponent } from './cars-filter/cars-filter.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarsFilterComponent, ShowCarsComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  
}
