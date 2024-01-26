import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CardModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export default class LoginFormComponent {}
