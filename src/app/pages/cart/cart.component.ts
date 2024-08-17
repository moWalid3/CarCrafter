import { AfterViewInit, Component, computed, inject, viewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CartService } from '../../core/services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, DatePipe } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { CartCar } from '../../core/models/car.model';
import { slideInAnimation } from '../../core/animations/animation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule, MatIconModule, CurrencyPipe, DatePipe, MatPaginatorModule, MatProgressSpinnerModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  animations: [slideInAnimation],
})
export class CartComponent implements AfterViewInit{
  private cartService = inject(CartService);
  paginator = viewChild<MatPaginator>(MatPaginator);
  displayedColumns: string[] = ['car', 'selectedColor', 'price', 'quantity', 'total', 'pickupDate', 'delete'];
  dataSource = computed(() => new MatTableDataSource(this.cartService.cartCars()));

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator()!;
  }

  onDelete(index: number) {
    this.cartService.deleteCarFromCart(index);
    this.updateCart();
  }

  onIncrement(index: number, car: CartCar) {
    this.cartService.updateCarQuantity(index, {...car, quantity: car.quantity + 1});
    this.updateCart();
  }

  onDecrement(index: number, car: CartCar) {
    this.cartService.updateCarQuantity(index, {...car, quantity: car.quantity - 1});
    this.updateCart();
  }

  updateCart() {
    this.dataSource().data = this.cartService.cartCars();
  }
}

