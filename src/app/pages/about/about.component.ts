import { Component } from '@angular/core';
import { AboutViewIntroComponent } from './about-view-intro/about-view-intro.component';
import { AboutOurAdvantageComponent } from './about-our-advantage/about-our-advantage.component';
import { AboutWeHaveComponent } from './about-we-have/about-we-have.component';
import { AboutOurBusinessComponent } from './about-our-business/about-our-business.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { AboutFaqComponent } from './about-faq/about-faq.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutViewIntroComponent,
    AboutOurAdvantageComponent,
    AboutWeHaveComponent,
    AboutOurBusinessComponent,
    AboutStaffComponent,
    AboutFaqComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
