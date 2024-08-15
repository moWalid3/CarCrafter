import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reviews-area',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './reviews-area.component.html',
  styleUrl: './reviews-area.component.scss',
  host: {
    class: 'container'
  }
})
export class ReviewsAreaComponent {
  customers = ['Max Cole', 'Michael Ray', 'David Sam', 'Robert Fox'];
}
