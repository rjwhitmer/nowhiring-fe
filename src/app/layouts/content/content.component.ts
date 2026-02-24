import { Component, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule, MatIconButton } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [Header, Footer, MatSidenavModule, MatButtonModule, MatIconButton, MatIconModule, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.css',
})
export class Content {
  protected readonly title = signal('now-hiring-fe');
  public isOpen: boolean = false;
}
