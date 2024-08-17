import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { CarsService } from '../../core/services/cars.service';
import { Car } from '../../core/models/car.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarDetailsSliderComponent } from "./car-details-slider/car-details-slider.component";
import { CarDetailsMainInfoComponent } from "./car-details-main-info/car-details-main-info.component";
import { CarDetailsAltInfoComponent } from "./car-details-alt-info/car-details-alt-info.component";
import { slideInAnimation } from '../../core/animations/animation';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [MatProgressSpinnerModule, CarDetailsSliderComponent, CarDetailsMainInfoComponent, CarDetailsAltInfoComponent],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
  animations: [slideInAnimation],
  host: {
    class: 'container',
    // '[@slideIn]': ''
  }
})
export class CarDetailsComponent implements OnChanges{
  private carsService = inject(CarsService);
  id = input<string>();
  car = signal<Car | undefined>(undefined);
  notfoundCar = signal(false);

  ngOnChanges() {
    if(this.id()) {
      setTimeout(() => {
        this.car.set(this.carsService.getCarById(this.id()!));
      }, 1000);
    }
    else
      this.notfoundCar.set(true);
  }
}
