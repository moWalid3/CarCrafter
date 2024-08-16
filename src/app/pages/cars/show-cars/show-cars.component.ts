import { Component, effect, inject, signal, viewChild, OnInit } from '@angular/core';
import { CarsService } from '../../../core/services/cars.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddToCartDirective } from '../../../core/directives/add-to-cart.directive';
import { RouterLink } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Car } from '../../../core/models/car.model';

@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe,
    MatTooltipModule,
    AddToCartDirective,
    RouterLink,
    MatPaginatorModule
  ],
  templateUrl: './show-cars.component.html',
  styleUrl: './show-cars.component.scss',
})
export class ShowCarsComponent implements OnInit{
  cars = inject(CarsService).finalCars;
  paginatedCars = signal<Car[]>([]);
  paginator = viewChild<MatPaginator>(MatPaginator);

  constructor() {
    effect(() => {
      if(this.cars()) {
        setTimeout(() => {
          this.updatePaginatedData();
        }, 0);
      }
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePaginatedData();
    }, 1000);
  }

  updatePaginatedData() {
    if(this.paginator() == undefined) return;

    const startIndex = this.paginator()!.pageIndex * this.paginator()!.pageSize;
    const endIndex = startIndex + this.paginator()!.pageSize;
    this.paginatedCars.set(this.cars().slice(startIndex, endIndex));
  }

  onPageChange(event: any) {
    this.updatePaginatedData();
  }

}
