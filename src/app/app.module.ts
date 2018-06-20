import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import {RecordService} from "./record.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RecordService,
  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
