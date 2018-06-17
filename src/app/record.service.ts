import { Injectable } from '@angular/core';
import { Record } from './record';
import { RECORDS } from './mock-records';
import { Observable} from 'rxjs';
import {of} from "rxjs/observable/of";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MessageService } from './message.service';

import { catchError } from 'rxjs/operators';



@Injectable()
export class RecordService {
  private recordsUrl = 'http://localhost:8080/';  // URL to web api


  constructor(private http: HttpClient, private messageService: MessageService) {
  }
  getRecords(): Observable<Record[]> {
    //return of(RECORDS);
    this.messageService.add('RecordService: fetched records');
    return this.http.get<Record[]>(this.recordsUrl)
      .pipe(
        catchError(this.handleError('getRecords', []))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead


      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RecordService: ' + message);
  }
}
