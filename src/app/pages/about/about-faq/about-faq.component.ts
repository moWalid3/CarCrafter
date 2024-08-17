import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-faq',
  standalone: true,
  imports: [CdkAccordionModule, MatIconModule],
  templateUrl: './about-faq.component.html',
  styleUrl: './about-faq.component.scss',
  host: {
    class: 'container'
  }
})
export class AboutFaqComponent {
  items = [
    {
      question: 'Why did I leave my contact information but no one contacted me?',
      answer: 'Due to the time difference, we might have been off duty, but we will reply to your message as soon as we are back at work.'
    },
    {
      question: "Is the car's language in Chinese?",
      answer: "Yes, since the car is a Chinese version, the language defaults to Chinese. But we can look for engineers to change its system language through technical means. This may require some service fees. If it is a language that comes with the system, such as English, it is not required. Please communicate with our business manager for details."
    },
    {
      question: "Are warranty services provided?",
      answer: "Depending on the purchased quantity and model, we have different warranty plans. Specific details need to be communicated with the business manager."
    },
    {
      question: "How do you determine the price of a car?",
      answer: "We select the source of the car by comparing the quotes from different dealers and considering the car's condition and market conditions. Ensure to provide you with the most competitive price."
    },
    {
      question: 'Do you have the qualifications to export cars?',
      answer: 'Yes, we have automobile export qualifications and can provide you with one-stop car purchasing services.'
    },
    {
      question: 'After purchasing a car, how long does it usually take to go through the export procedures?',
      answer: 'After purchasing the car, we need to go to the vehicle management office for inspection, apply for export license, customs declaration and other processes, which generally takes 15 to 20 working days.'
    },
    {
      question: 'What are the transportation methods for automobile export?',
      answer: 'There are generally three modes of transportation, namely ship transportation, truck transportation and train transportation.'
    },
    {
      question: 'What are the export transportation methods for electric cars?',
      answer: 'The export transportation of cars mainly includes the following methods: Ro-Ro transportation, car container transportation, and frame-based transportation. (Click here for a more detailed explanation)'
    },
    {
      question: 'What is the safest way to transport cars for export?',
      answer: 'Transportation via ro-ro ship is the safest. However, because this mode of transportation has many limiting factors, it is necessary to decide whether to use this method based on the actual situation.'
    },
  ];
}
