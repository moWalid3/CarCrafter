import { Component, inject, input } from '@angular/core';
import { CarsService } from '../../../core/services/cars.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './show-cars.component.html',
  styleUrl: './show-cars.component.scss'
})
export class ShowCarsComponent {
  cars = inject(CarsService).finalCars;
}
