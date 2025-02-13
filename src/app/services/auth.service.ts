// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = 'http://localhost:8000/api'; // Mets ici l'URL de ton API Symfony

  constructor(private http: HttpClient) {}

  // On modifie ici pour envoyer { pseudo: ..., password: ... }
  login(pseudo: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { pseudo, password });
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }
}
