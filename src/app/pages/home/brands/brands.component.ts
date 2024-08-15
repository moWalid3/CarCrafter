import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    CarouselModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
  host: {
    class: 'container'
  }
})
export class BrandsComponent {
  brands = [
    'Abarth',
    'Alpine',
    'Audi',
    'BMW',
    'BYD',
    'Citroen',
    'Mazda',
    'Mercedes',
    'MG',
    'MINI',
    'Mitsubishi',
    'Nissan',
    'Peugeot',
    'Porsche',
    'Renault',
    'SEAT',
    'SKODA',
    'Smart',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'Vauxhall',
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    stagePadding: 10,
    margin: 8,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3,
      },
      500: {
        items: 4
      },
      740: {
        items: 7
      },
      940: {
        items: 10
      }
    },
  };
}
