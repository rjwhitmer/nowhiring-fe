import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { AppStore } from '../../app-store';
import { form, FormField } from '@angular/forms/signals'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormField, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.css',
})

export class Login {
  appStore = inject(AppStore);
  public hidePassword = signal(true);
  loginModel = signal({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel);

  onSubmit() {
    const formData = this.loginModel();
    this.appStore.login(formData.email, formData.password);
  }
}
