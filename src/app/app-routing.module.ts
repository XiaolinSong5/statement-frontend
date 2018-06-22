import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent }      from './records/records.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'records', component: RecordsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

