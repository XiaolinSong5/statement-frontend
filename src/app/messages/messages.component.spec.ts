import {TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

describe('MessagesComponent', () => {
  let comp: MessagesComponent;
  let messageService : MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        MessagesComponent,
        { provide: MessageService, useClass: MockMessageService }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(MessagesComponent);
    messageService = TestBed.get(MessageService);
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.messageService.messages[0]).toContain(messageService.messages[0]);
  });
  class MockMessageService {
    messages: string[] = ["testing component"];
  };

});


