import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterService } from '../../../core/services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private toaster = inject(ToasterService);
  private router = inject(Router);
  loading = signal(false);
  passwordIconHide = signal(true);

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  onClickAtEyeIcon(event: MouseEvent) {
    this.passwordIconHide.update(old => !old);
    event.stopPropagation();
    event.preventDefault();
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      this.loading.set(true);

      const data = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      }

      this.authService.login(data).subscribe({
        next: res => {
          this.loading.set(false);
          this.toaster.showToaster("Login completed successfully.");
          this.router.navigate(['/'])
        },
        error: err => {
          this.loading.set(false);
          this.toaster.showToaster(err.error.message, 'error');
        }
      })

    } else {
      this.toaster.showToaster("Please complete all fields correctly before submitting the form.", 'error');
    }
  }
}
