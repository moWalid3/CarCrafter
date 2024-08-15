import { Component, inject, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarsService, SortOptionValue } from '../../../core/services/cars.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars-filter',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCheckboxModule, FormsModule,
    MatFormFieldModule, MatIconModule, MatSelectModule, CarsFilterComponent],
  templateUrl: './cars-filter.component.html',
  styleUrl: './cars-filter.component.scss'
})
export class CarsFilterComponent {
  private carsService = inject(CarsService);
  private debounceTimeout: any;
  carBrands = this.carsService.carBrands;
  sortOptions = this.carsService.sortOptions;

  searchTerm = signal('');
  selectedOption = signal<SortOptionValue>('default');
  selectedBrands = signal<string[]>([]);

  //=> Sort
  manageSorting() {
    this.carsService.filtration(this.searchTerm(), this.selectedOption(), this.selectedBrands());
  }

  //=> search
  onSearch() {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => this.search(), 500);
  }

  search() {
    this.carsService.filtration(this.searchTerm(), this.selectedOption(), this.selectedBrands());
  }

  //=> by brands
  onBrandChange(event: any) {
    const brandValue = event.source.value;

    if (event.checked)
      this.selectedBrands.update(oldBrands => [...oldBrands, brandValue]);
    else
      this.selectedBrands.update(oldBrands => oldBrands.filter(brand => brand !== brandValue));

    this.carsService.filtration(this.searchTerm(), this.selectedOption(), this.selectedBrands());
  }
}
