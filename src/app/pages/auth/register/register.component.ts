import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/auth.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterService } from '../../../core/services/toaster.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private toaster = inject(ToasterService);
  private router = inject(Router);
  loading = signal(false);
  passwordIconHide = signal(true);
  rePasswordIconHide = signal(true);

  registerForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null),
    phoneNumber: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    postalCode: new FormControl(null, [Validators.required, Validators.min(10000), Validators.max(99999)]),
    address: new FormControl(null, [Validators.required]),
  }, {validators: this.matchingPassword});

  private matchingPassword(control: AbstractControl) {
    let password = control.get('password');
    let rePassword = control.get('rePassword');
    if(password?.value === rePassword?.value)
      return null;
    else {
      rePassword?.setErrors({matchPassword: "Password and rePassword don't match"});
      return {matchPassword: "Password and rePassword don't match"};
    }
  }

  onClickAtEyeIcon(event: MouseEvent, type: string) {
    if(type === 'password') {
      this.passwordIconHide.update(old => !old);
    } else {
      this.rePasswordIconHide.update(old => !old);
    }
    event.stopPropagation();
    event.preventDefault();
  }

  onSubmit(): void {
    if(this.registerForm.valid) {
      this.loading.set(true);

      this.authService.register(this.createUser()).subscribe({
        next: res => {
          this.loading.set(false);
          this.toaster.showToaster("Account created successfully.");
          this.router.navigate(['/'])
          console.log(res);
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

  private createUser():User {
    return {
      name: this.registerForm.value.username!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!,
      rePassword: this.registerForm.value.rePassword!,
      phone: '01111111111'
    }
  }
}
