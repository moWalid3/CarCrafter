import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthRes, User } from '../models/auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  userToken = signal('');

  register(user: User) {
    return this.http.post<AuthRes>('/api/v1/auth/signup', user).pipe(
      tap(res => {
        this.userToken.set(res.token)
        localStorage.setItem('authToken', res.token);
      })
    )
  }

  login(data: {email: string, password: string}) {
    return this.http.post<AuthRes>('/api/v1/auth/signin', data).pipe(
      tap(res => {
        this.userToken.set(res.token)
        localStorage.setItem('authToken', res.token);
      })
    )
  }
}
