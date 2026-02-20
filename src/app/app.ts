import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('now-hiring-fe');
}
