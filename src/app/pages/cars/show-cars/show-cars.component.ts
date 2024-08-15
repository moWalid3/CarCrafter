import { Component, input } from '@angular/core';
import { Car } from '../../../core/models/car.model';

@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [],
  templateUrl: './show-cars.component.html',
  styleUrl: './show-cars.component.scss'
})
export class ShowCarsComponent {
  cars = input.required<Car[]>();
}
