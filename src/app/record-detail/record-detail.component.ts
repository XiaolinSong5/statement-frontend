import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record';
import { RecordService} from '../record.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record;
  constructor(private recordService:RecordService,
              private route:ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getRecord();
  }
  getRecord(): void {
    const reference = +this.route.snapshot.paramMap.get('reference');
    this.recordService.getRecord(reference)
      .subscribe(record => this.record = record);
  }
}
