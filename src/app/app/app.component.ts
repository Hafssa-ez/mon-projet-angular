// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Pour pouvoir utiliser <router-outlet>
  template: `
    <h1>Mon Application</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
