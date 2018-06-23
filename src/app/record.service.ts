import { Injectable } from '@angular/core';
import { Record } from './record';
import { RECORDS } from './mock-records';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MessageService } from './message.service';

import {catchError, tap} from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class RecordService {
  private recordsUrl = 'http://localhost:8080/';  // URL to web api
  private xmlrecordsUrl = this.recordsUrl + 'xmlrecords';


  constructor(private http: HttpClient, private messageService: MessageService) {
  }
  getRecords(): Observable<Record[]> {
    this.messageService.add('RecordService: fetched records');
    // return of(RECORDS)
    //   .pipe(
    //     catchError(this.handleError('getRecords', []))
    //   );


      return this.http.get<Record[]>(this.xmlrecordsUrl)
        .pipe(
          tap(records => this.log(`fetched records`)),
          catchError(this.handleError('getRecords', []))
        );

    // return this.http.get<Record[]>(this.recordsUrl)
    //   .pipe(
    //     catchError(this.handleError('getRecords', []))
    //   );
  }

  getRecord(reference: number): Observable<Record> {
    const url = `${this.xmlrecordsUrl}/${reference}`;
    let a = this.http.get<Record>(url);
    return this.http.get<Record>(url).pipe(
      tap(_ => this.log(`fetched record reference=${reference}`)),
      catchError(this.handleError<Record>(`getRecord reference=${reference}`))
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
