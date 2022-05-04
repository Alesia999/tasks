import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksUrl = 'api/tasks'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.tasksUrl)
      .pipe(catchError(this.handleError<Task[]>('getTasks', [])));
  }
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http
      .get<Task>(url)
      .pipe(catchError(this.handleError<Task>(`getHero id=${id}`)));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the task on the server */
  updateTask(task: Task): Observable<any> {
    return this.http
      .put(this.tasksUrl, task, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateTask')));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(this.tasksUrl, task, this.httpOptions)
      .pipe(catchError(this.handleError<Task>('addTask')));
  }
  deleteTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http
      .delete<Task>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Task>('deleteTask')));
  }
}
