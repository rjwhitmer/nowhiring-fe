import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  appStore = inject(AppStore);
  public hidePassword = signal(true);
}
