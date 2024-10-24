import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private clients = 'data/clients.json'
  private projects = 'data/projects.json'

  constructor(private http: HttpClient) { }

  getClients(): Observable<any[]>{
    return this.http.get<any[]>(this.clients).pipe(
      catchError(this.handleError<any[]>('getClients', []))
    );
  }

  getProjects(): Observable<any[]>{
    return this.http.get<any[]>(this.projects).pipe(
      catchError(this.handleError<any[]>('getProjects', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); 
      return of(result as T);
    };
  }

}
