import { Component, effect, inject, input, model, output, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarsService } from '../../../core/services/cars.service';
import { Car } from '../../../core/models/car.model';


@Component({
  selector: 'app-cars-filter',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCheckboxModule,
    MatFormFieldModule, MatIconModule, MatSelectModule, CarsFilterComponent],
  templateUrl: './cars-filter.component.html',
  styleUrl: './cars-filter.component.scss'
})
export class CarsFilterComponent {
  private carsService = inject(CarsService);
  allCars =  this.carsService.allCars;
  filteredCars = output<Car[]>();

  sortOptions = signal([
    {value: 'default', viewValue: 'Sort By Default'},
    {value: 'latest', viewValue: 'Sort By Latest'},
    {value: 'low', viewValue: 'Sort By Low Price'},
    {value: 'high', viewValue: 'Sort By High Price'},
  ]);
  selectedOption = signal<'default' | 'latest' | 'low' | 'high'>('default');
  private debounceTimeout: any;

  ngOnInit(): void {
  }

  constructor() {
    effect(() => {
      this.filteredCars.emit(this.allCars() ?? [])
    })
  }

  onSearch(searchTerm: string) {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => this.search(searchTerm), 500);
  }

  search(term: string) {
    console.log(term);
  }

  //=> brands

  carBrands = signal(['All Brands', "Toyota", 'Ford', 'Chevrolet', 'BMW', 'Tesla', 'Nissan', 'Ferrari', 'Others']);
  selectedBrands = signal<string[]>([]);

  onBrandChange(event: any) {
    const brandValue = event.source.value;

    if (event.checked)
      this.selectedBrands.update(oldBrands => [...oldBrands, brandValue]);
    else
      this.selectedBrands.update(oldBrands => oldBrands.filter(brand => brand !== brandValue));

    this.filterByBrand();
  }

  filterByBrand() {
    const checkAllBrands = this.selectedBrands().find(brand => brand === 'All Brands');
    if( checkAllBrands || this.selectedBrands().length === 0) {
      this.filteredCars.emit(this.allCars()!)
      return;
    }

    let finalCars = this.allCars()?.filter(car => {
      const doesExist = this.selectedBrands().find(brand => brand === car.brand);
      return doesExist;
    })

    if(this.selectedBrands().find(brand => brand === 'Others')) {

      // todo --> here handle Others --> by filter with this.carBrands()

    }

    this.filteredCars.emit(finalCars!)
  }
}
