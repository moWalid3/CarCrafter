import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-purchase',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './car-purchase.component.html',
  styleUrl: './car-purchase.component.scss',
  host: {
    class: 'container'
  }
})
export class CarPurchaseComponent {

}
