import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // si tu n'as pas importé globalement
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // (optionnel si importé globalement)
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit()">
      <label>Pseudo:</label>
      <input type="text" [(ngModel)]="pseudo" name="pseudo" required>

      <label>Password:</label>
      <input type="password" [(ngModel)]="password" name="password" required>

      <button type="submit">Se connecter</button>
    </form>
  `
})
export class LoginComponent {
  pseudo = ''; // Ici on utilise "pseudo" et non "username"
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.pseudo, this.password).subscribe({
      next: (res: any) => {
        // On suppose que l'API renvoie { token: "..." }
        if (res && res.token) {
          this.authService.setToken(res.token);
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.error('Erreur login:', err);
      }
    });
  }
}
