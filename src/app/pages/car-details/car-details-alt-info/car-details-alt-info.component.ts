import { Component, inject, input, signal } from '@angular/core';
import { Car } from '../../../core/models/car.model';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { ToasterService } from '../../../core/services/toaster.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-details-alt-info',
  standalone: true,
  imports: [
    MatIconModule,
    DatePipe,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './car-details-alt-info.component.html',
  styleUrl: './car-details-alt-info.component.scss',
})
export class CarDetailsAltInfoComponent {
  private toaster = inject(ToasterService);
  car = input.required<Car>();
  features = [
    'Multi-zone A/C',
    'Premium sound system',
    'Memory seat',
    'Heated front seats',
    'Bluetooth',
    'Adaptive Cruise Control',
    'Navigation system',
    'Andriod Auto',
    'Cooled Seats',
    'Leather seats',
    'Intermittent wipers',
    'Keyles Start',
  ];
  history = [
    "The vehicle's history reflects decades of design and engineering progress.",
    'It has evolved through several generations with new technologies and features.',
    'The model is recognized for its reliability and has won numerous awards.',
    'Each version continues to set high standards in automotive excellence.',
  ];
  reviews = signal([
    {
      img: 'car_details/review1.png',
      name: 'Finn Lawson',
      date: '8-15-2024',
      text: "This car offers a smooth and powerful driving experience, thanks to its responsive engine and advanced suspension system. It's perfect for both city driving and long road trips, making it a versatile choice for any driver.",
    },
    {
      img: 'car_details/review2.png',
      name: 'Alexander Luca',
      date: '6-10-2024',
      text: 'With a comprehensive suite of safety technologies, including adaptive cruise control, automatic emergency braking, and lane-keeping assist, this car provides peace of mind on every journey. It consistently earns top safety ratings from industry experts.',
    },
    {
      img: 'car_details/review3.png',
      name: 'Benjamin Liam',
      date: '5-22-2024',
      text: 'This model stands out for its excellent fuel economy, helping you save on gas while reducing your environmental footprint. Its efficient engine design and aerodynamic profile contribute to its low fuel consumption, making it a cost-effective option for daily commuting.',
    },
  ]);

  name = signal('');
  text = signal('');

  onSubmit() {
    if (this.name() && this.text()) {
      const newRev = {
        img: 'car_details/person.png',
        date: new Date().toISOString(),
        name: this.name(),
        text: this.text(),
      };
      
      this.reviews.update((oldRev) => [newRev, ...oldRev]);

      this.toaster.showToaster('Your review added successfully.');
    }
  }
}
