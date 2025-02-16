import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Action {
  id: number;
  action: string;
  date: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class SustainabilityService {
  private apiUrl = 'http://localhost:3000/api/actions';

  constructor(private http: HttpClient) {}

  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.apiUrl);
  }

  addAction(action: Action): Observable<Action> {
    return this.http.post<Action>(this.apiUrl, action);
  }
}