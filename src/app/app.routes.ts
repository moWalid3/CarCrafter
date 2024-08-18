import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

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
    path: 'cars/:id',
    loadComponent: () =>
      import('./pages/car-details/car-details.component').then(
        (com) => com.CarDetailsComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((com) => com.AboutComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((com) => com.CartComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((com) => com.AuthComponent),
    children: [
      {
        path: 'register',
        canMatch: [authGuard],
        loadComponent: () =>
          import('./pages/auth/register/register.component').then(
            (com) => com.RegisterComponent
          ),
      },
      {
        path: 'login',
        canMatch: [authGuard],
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            (com) => com.LoginComponent
          ),
      },
    ],
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
