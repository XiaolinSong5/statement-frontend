import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import {RecordService} from "./record.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";
import { RecordDetailComponent } from './record-detail/record-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    MessagesComponent,
    RecordDetailComponent
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
