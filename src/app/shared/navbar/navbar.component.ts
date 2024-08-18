import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { ToasterService } from '../../core/services/toaster.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
    MatBadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  authService = inject(AuthService);
  cartService = inject(CartService);
  private toaster = inject(ToasterService);

  ngOnInit(): void {
    this.cartService.getCartCarsFromLocalStorage();
  }

  onLogout() {
    this.toaster.showToaster('Logout completed successfully.')
    localStorage.removeItem('authToken');
    this.authService.userToken.set('');
  }
}
