import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { bounceAnimation } from '../../../core/animations/animation';

@Component({
  selector: 'app-about-area',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './about-area.component.html',
  styleUrl: './about-area.component.scss',
  animations: [bounceAnimation],
  host: {
    class: 'container'
  }
})
export class AboutAreaComponent {

}
