import { TestBed, inject, async} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecordService } from './record.service';

describe('RecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [RecordService]
    });
  });

  it('should be created', async(inject([RecordService], (service: RecordService) => {
    expect(service).toBeTruthy();
  })));
});
