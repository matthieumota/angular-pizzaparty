import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from './message-service';
import { Message } from '../models/message';

describe('MessageService', () => {
  let service: MessageService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MessageService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should add and delete messages', () => {
    service.addMessage(new Message('Hello'));
    service.addMessage(new Message('World'));
    expect(service.getMessages()().map(m => m.content)).toEqual(['Hello', 'World']);

    service.deleteMessage(0);
    expect(service.getMessages()().map(m => m.content)).toEqual(['World']);
  });

  it('should post a message to the api', () => {
    service.createMessage(new Message('Hello')).subscribe();

    const req = http.expectOne('http://localhost:3000/messages');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ content: 'Hello' });
    req.flush({ id: '1', content: 'Hello' });

    expect(service.getMessages()()).toEqual([new Message('Hello', '1')]);
  });
});
