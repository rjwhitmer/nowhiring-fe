import { Component, inject } from '@angular/core';
import { AppStore } from '../../app.store';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
  // providers: [AppStore]
})
export class Header {
  appStore = inject(AppStore);
  // user = this.appStore.user();
}
