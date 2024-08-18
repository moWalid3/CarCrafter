import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService)
  const router = inject(Router);

  if(authService.userToken() === '')
    return true;
  else {
    router.navigate(['/']);
    return false;
  }
};
