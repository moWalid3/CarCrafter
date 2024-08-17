import { Component, input, OnChanges, signal } from '@angular/core';
import { Car } from '../../../core/models/car.model';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-car-details-slider',
  standalone: true,
  imports: [MatIconModule, DatePipe, CarouselModule],
  templateUrl: './car-details-slider.component.html',
  styleUrl: './car-details-slider.component.scss',
  host : {
    class: 'p-4 bg-white rounded-4 mb-4',
  }
})
export class CarDetailsSliderComponent implements OnChanges{
  car = input.required<Car>();
  listedOn = signal('8-16-2024')
  views = signal(800);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    items: 1
  };

  ngOnChanges(){
    this.listedOn.set(`${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 30) + 1}-2024`)
    this.views.set(Math.floor(Math.random() * 2000) + 100);
  }
}
