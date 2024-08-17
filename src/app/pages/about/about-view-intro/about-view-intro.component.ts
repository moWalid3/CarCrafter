import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-view-intro',
  standalone: true,
  imports: [MatButton, RouterLink],
  templateUrl: './about-view-intro.component.html',
  styleUrl: './about-view-intro.component.scss'
})
export class AboutViewIntroComponent {

}
