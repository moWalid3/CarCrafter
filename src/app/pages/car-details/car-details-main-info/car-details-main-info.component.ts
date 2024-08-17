import { Component, input, OnChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Car } from '../../../core/models/car.model';
import { MatButtonModule } from '@angular/material/button';
import { AddToCartDirective } from '../../../core/directives/add-to-cart.directive';
import { CurrencyPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';

@Component({
  selector: 'app-car-details-main-info',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, AddToCartDirective, TextFieldModule, CurrencyPipe, MatFormFieldModule, MatInputModule],
  templateUrl: './car-details-main-info.component.html',
  styleUrl: './car-details-main-info.component.scss',
})
export class CarDetailsMainInfoComponent implements OnChanges {
  car = input.required<Car>();
  dataShow: {icon: string, title: string, value: string}[] = [];

  ngOnChanges(){
    this.dataShow = [
      { icon: 'speed', title: 'Millage:', value: `${this.car().mileage}`},
      { icon: 'webhook', title: 'Transmission:', value: `${this.car().transmission}`},
      { icon: 'local_gas_station', title: 'Fuel Type:', value: `${this.car().fuelType}`},
      { icon: 'library_add_check', title: 'Condition:', value: 'Brand New'},
      { icon: 'gas_meter', title: 'Engine size:', value: '2.0 litre'},
      { icon: 'palette', title: 'Color:', value: `${this.car().color}`},
      { icon: 'event_available', title: 'Year:', value: `${this.car().year}`},
    ]
  }

}
