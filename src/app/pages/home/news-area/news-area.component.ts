import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisibilityDirective } from '../../../core/directives/visibility.directive';

@Component({
  selector: 'app-news-area',
  standalone: true,
  imports: [MatIconModule, VisibilityDirective],
  templateUrl: './news-area.component.html',
  styleUrl: './news-area.component.scss',
  host: {
    class: 'container'
  }
})
export class NewsAreaComponent {
  newsData = [
    {
      title: '4 Best SUVs for Off-Roading and Camping From China in 2024; Newest',
      date: '2024-08-13',
      description: 'Explore amazing features and find the perfect match for your next outdoor escapade. The 5 best SUVs for off-roading and camping from China are built for pure adventure!'
    },
    {
      title: '5 Best 7-Seater Electric Cars From China in 2024; The best way',
      date: '2024-08-05',
      description: 'Discover the 5 best 7-seater electric cars from China in 2024! Compare cargo space, charging time, and price to find the perfect family-friendly Elee Vlee here without any the place.'
    },
    {
      title: '5 Cheapest Electric Convertible Cars in 2024; Starting at Just $14,040!',
      date: '2024-08-01',
      description: 'Discover the 5 cheapest electric convertible cars in 2024. Find the perfect balance of style, performance, and eco-friendliness without breaking the bank.'
    }
  ]
}
