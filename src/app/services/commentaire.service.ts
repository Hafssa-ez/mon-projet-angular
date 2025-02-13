import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:8000/api/commentaires';

  constructor(private http: HttpClient) { }

  getAllCommentaires(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // etc.
}
