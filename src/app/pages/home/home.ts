import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.css',
})
export class Home {
}
