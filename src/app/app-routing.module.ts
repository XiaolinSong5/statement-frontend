import { NgModule } from '@angular/core';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RecordsComponent }      from './records/records.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'records', component: RecordsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:reference', component: RecordDetailComponent }
  ]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

