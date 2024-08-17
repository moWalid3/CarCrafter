import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-staff',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './about-staff.component.html',
  styleUrl: './about-staff.component.scss',
  host: {
    class: 'bg-main-light'
  }
})
export class AboutStaffComponent {
  staffData = [
    {
      name: 'Alex',
      text: "Teamwork makes the dream work.",
      position: 'Business Manager'
    },
    {
      name: 'Richard',
      text:  "Every challenge is an opportunity to grow.",
      position: 'Automotive Technician'
    },
    {
      name: 'Jack',
      text:  "Work bears witness who does well.",
      position: 'Business Manager'
    },
    {
      name: 'Arvin',
      text:   "Excellence is not an act, but a habit.",
      position: 'Marketing Specialist'
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    items: 1
  };
}
