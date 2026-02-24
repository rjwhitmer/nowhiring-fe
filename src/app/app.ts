import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule, MatIconButton } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MatSidenavModule, MatButtonModule, MatIconButton, MatIconModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('now-hiring-fe');
  public isOpen: boolean = false;
}
