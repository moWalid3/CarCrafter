import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { bounceAnimation } from '../../../core/animations/animation';

@Component({
  selector: 'app-about-our-business',
  standalone: true,
  imports: [MatProgressBarModule, AsyncPipe],
  templateUrl: './about-our-business.component.html',
  styleUrl: './about-our-business.component.scss',
  animations: [bounceAnimation],
  host: {
    class: 'container'
  },
})
export class AboutOurBusinessComponent {
  progressBarData = [
    {title: 'Customer Satisfaction Rate', percentage: '98%'},
    {title: 'Repeat Customer Rate', percentage: '63%'},
    {title: 'On-time Delivery Rate', percentage: '97%'},
    {title: 'Warranty Claim Rate', percentage: '4%'},
  ]
}
