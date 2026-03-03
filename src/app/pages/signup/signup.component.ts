import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-signup',
  imports: [RouterLink, RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.css',
})
export class Signup {

}
