import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  private authService = inject(AuthService);

  ngOnInit() {
    if(localStorage.getItem('authToken'))
      this.authService.userToken.set(localStorage.getItem('authToken')!);
  }
}
