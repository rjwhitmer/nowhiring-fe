import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { AppStore } from '../../app.store';
import { form, FormField } from '@angular/forms/signals'

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormField],
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

  async onSubmit() {
    const formData = this.loginModel();
    console.log('formData', formData)
    await this.appStore.login(formData.email, formData.password);
  }
}
