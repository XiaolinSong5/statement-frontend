import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import {RecordService} from "./record.service";


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
