import { RecordService } from './record.service';
import { MessageService } from './message.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe("RecordService", () => {

  beforeEach(() => {
    // 0. set up the test environment
    TestBed.configureTestingModule({
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it(`should issue a request`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        // 3. send a simple request
        http.get('http://localhost:8080/').subscribe();

        // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
        // here two, it's significantly less boilerplate code needed to verify an expected request
        backend.expectOne({
          url: 'http://localhost:8080/',
          method: 'GET'
        });
      })
    )
  );



});


