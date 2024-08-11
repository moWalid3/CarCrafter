import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Car Crafter',
  },
  {
    path: 'cars',
    loadComponent: () =>
      import('./pages/cars/cars.component').then((com) => com.CarsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((com) => com.AboutComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then(
        (com) => com.RegisterComponent
      ),
  },
];
