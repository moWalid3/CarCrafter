import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { BrandsComponent } from "./brands/brands.component";
import { CarOffersComponent } from "./car-offers/car-offers.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, BrandsComponent, CarOffersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: ''
  }
})
export class HomeComponent {

}
