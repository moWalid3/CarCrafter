import { Directive, inject, input } from '@angular/core';
import { Car } from '../models/car.model';
import { openAddCarToCartDialog } from '../../pages/components/quantity-dialog/quantity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ToasterService } from '../services/toaster.service';
import { Router } from '@angular/router';

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
  private authService = inject(AuthService);
  private toaster = inject(ToasterService);
  private router = inject(Router);

  onAddToCart() {
    if(this.authService.userToken() === '') {
      this.toaster.showToaster('You need to login first','info');
      this.router.navigate(['/auth/login']);
      return;
    }
    openAddCarToCartDialog(this.dialog, this.car())
      .pipe(filter((val) => !!val))
      .subscribe((val) => this.cartService.addCarToCart({...val, ...this.car()}));
  }
}
