import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-we-have',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './about-we-have.component.html',
  styleUrl: './about-we-have.component.scss',
  host: {
    class: 'bg-main-light'
  }
})
export class AboutWeHaveComponent {
  data = [
    {
      title: 'Owns Multiple Large-Area New Car Warehouses',
      content: ['Multiple Brands', 'Different Models', 'Multiple Stocks']
    },
    {
      title : 'OCooperate With Multiple Used Car Dealers And Have Used Car Showrooms',
      content: ['No High Price', 'No Fake Car Condition', 'No Quality Issues']
    },
    {
      title: 'Not Just Cars, But Also Car Spare Parts',
      content: ['Complete Range', 'Large Supply', 'Quality Guaranteed']
    }
  ]

}


