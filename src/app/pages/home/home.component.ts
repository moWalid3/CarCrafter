import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { BrandsComponent } from "./brands/brands.component";
import { CarOffersComponent } from "./car-offers/car-offers.component";
import { CarPurchaseComponent } from "./car-purchase/car-purchase.component";
import { AboutAreaComponent } from "./about-area/about-area.component";
import { CounterAreaComponent } from "./counter-area/counter-area.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, BrandsComponent, CarOffersComponent, CarPurchaseComponent, AboutAreaComponent, CounterAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: ''
  }
})
export class HomeComponent {

}
