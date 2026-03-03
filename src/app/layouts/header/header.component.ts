import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { AppStore } from '../../app-store';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.css',
  providers: [AppStore]
})
export class Header implements OnInit{
  readonly appStore = inject(AppStore);
  public user: string | undefined | null;

  public ngOnInit(): void {
    this.user = sessionStorage.getItem('userEmail');
  }
}
