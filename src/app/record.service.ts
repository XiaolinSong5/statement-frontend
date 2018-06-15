import { Injectable } from '@angular/core';
import { Record } from './record';
import { RECORDS } from './mock-records';
import { Observable} from 'rxjs';
import {of} from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class RecordService {
  private recordsUrl = 'http://localhost:8080/';  // URL to web api


  constructor(private http: HttpClient) {
  }
  getRecords(): Observable<Record[]> {
    //return of(RECORDS);
    return this.http.get<Record[]>(this.recordsUrl);
  }


}
