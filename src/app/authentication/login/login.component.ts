import { Component } from '@angular/core';
import { LoginFormBannerComponent, LoginFormComponent, LoginFormFooterComponent } from '../../components';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    LoginFormComponent,
    LoginFormBannerComponent,
    LoginFormFooterComponent,
  ],
})
export default class LoginComponent {}
