import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.model';
import { toSignal } from '@angular/core/rxjs-interop';

export type SortOptionValue = 'default' | 'latest' | 'low' | 'high';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpClient = inject(HttpClient);
  private allCars = toSignal(this.getAllCars(), {initialValue: []});
  private filteredCars = signal<Car[]>([]);
  finalCars = this.filteredCars.asReadonly();
  carBrands = signal(['All Brands', "Toyota", 'Ford', 'Chevrolet', 'BMW', 'Tesla', 'Nissan', 'Ferrari', 'Others']).asReadonly();
  sortOptions = signal<{value: SortOptionValue, viewValue: string}[]>([
    {value: 'default', viewValue: 'Sort By Default'},
    {value: 'latest', viewValue: 'Sort By Latest'},
    {value: 'low', viewValue: 'Sort By Low Price'},
    {value: 'high', viewValue: 'Sort By High Price'},
  ]).asReadonly();

  constructor() {
    effect(() => {
      if(this.allCars()) {
        setTimeout(() => {
          this.filteredCars.set(this.allCars().sort((a, b) => b.id > a.id ? 1 : -1));
        }, 0);
      }
    })
  }

  private getAllCars () {
    return this.httpClient.get<Car[]>('c/fc8f-f7f2-4c9e-a550');
  }

  getCarById(id: string) {
    return this.allCars().find(car => car.id === id);
  }

  getCarOffers() {
    return this.httpClient.get<Car[]>('c/4bbf-4125-4467-8ab5');
  }

  filtration(searchTerm:string, selectedOption: SortOptionValue, selectedBrands: string[]) {
    this.handleFilterByBrand(selectedBrands);
    this.handleSearching(searchTerm);
    this.handleSorting(selectedOption);
  }

  private handleSearching(searchTerm: string) {
    this.filteredCars.update(oldCars => oldCars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  private handleSorting(selectedOption: SortOptionValue) {

    if(selectedOption === 'default')
      this.defaultSorting();

    else if(selectedOption === 'latest')
      this.filteredCars.update(oldCars => oldCars.sort((a, b) => b.year > a.year ? 1 : -1))

    else
      this.filteredCars.update(oldCars => oldCars.sort((a, b) =>{
        if(selectedOption === 'low')
          return a.price > b.price ? 1 : -1
        else
          return b.price > a.price ? 1 : -1
      }))

  }

  private defaultSorting() {
    this.filteredCars.update(oldCars => {
      let defaultCars: Car[] = [];

      this.allCars().sort((a, b) => b.id > a.id ? 1 : -1).forEach(car => {
        if(oldCars.find(oldCar => oldCar.id === car.id))
          defaultCars.push(car);
      })

      return defaultCars;
    })
  }

  private handleFilterByBrand(selectedBrands: string[]) {
    if( selectedBrands.find(brand => brand === 'All Brands') || selectedBrands.length === 0) {
      this.filteredCars.set(this.allCars());

      return;
    }

    this.filteredCars.set(
      this.allCars().filter(car => !!selectedBrands.find(brand => brand === car.brand))
    )

    if(selectedBrands.find(brand => brand === 'Others')) {
      this.allCars().forEach(car => {
        const doesExist = this.carBrands().find(brand => brand === car.brand);

        if(!doesExist)
          this.filteredCars.update(oldCars => [...oldCars, car]);
      })
    }
  }

}
