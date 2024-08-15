import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarsService } from '../../../core/services/cars.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddToCartDirective } from '../../../core/directives/add-to-cart.directive';

@Component({
  selector: 'app-car-offers',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    CurrencyPipe,
    MatList, MatListItem,
    MatProgressSpinnerModule, AddToCartDirective
  ],
  templateUrl: './car-offers.component.html',
  styleUrl: './car-offers.component.scss',
  host: {
    class: 'container'
  }
})
export class CarOffersComponent {
  private carsService = inject(CarsService);
  carOffers = toSignal(this.carsService.getCarOffers());
}
