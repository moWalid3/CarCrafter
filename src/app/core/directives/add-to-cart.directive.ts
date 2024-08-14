import { Directive, inject, input } from '@angular/core';
import { Car } from '../models/car.model';
import { openAddCarToCartDialog } from '../../pages/components/quantity-dialog/quantity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { CartService } from '../services/cart.service';

@Directive({
  selector: 'button[appAddToCart]',
  standalone: true,
  host: {
    '(click)': 'onAddToCart()',
  },
})
export class AddToCartDirective {
  car = input.required<Car>({ alias: 'appAddToCart' });
  private dialog = inject(MatDialog);
  private cartService = inject(CartService);

  onAddToCart() {
    openAddCarToCartDialog(this.dialog, this.car())
      .pipe(filter((val) => !!val))
      .subscribe((val) => this.cartService.addCarToCart({...val, ...this.car()}));
  }
}
