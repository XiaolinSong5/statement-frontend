import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { Symptom } from '../symptom.model';
import { RECORDS } from '../mock-records';
import { RecordService} from '../record.service';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Record[];
  //records: Symptom[];

  constructor(private  recordService: RecordService) { }

  ngOnInit() {
    this.getRecords()
  }
  getRecords(): void {
    this.recordService.getRecords()
      .subscribe(records => this.records = records);
  }
}
