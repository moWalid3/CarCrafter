import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { BrandsComponent } from "./brands/brands.component";
import { CarOffersComponent } from "./car-offers/car-offers.component";
import { CarPurchaseComponent } from "./car-purchase/car-purchase.component";
import { AboutAreaComponent } from "./about-area/about-area.component";
import { CounterAreaComponent } from "./counter-area/counter-area.component";
import { ReviewsAreaComponent } from "./reviews-area/reviews-area.component";
import { ChooseAreaComponent } from "./choose-area/choose-area.component";
import { NewsAreaComponent } from "./news-area/news-area.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, BrandsComponent, CarOffersComponent, CarPurchaseComponent, AboutAreaComponent, CounterAreaComponent, ReviewsAreaComponent, ChooseAreaComponent, NewsAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: ''
  }
})
export class HomeComponent {

}
