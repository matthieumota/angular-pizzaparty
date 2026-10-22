import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { Message } from '../models/message';

@Service()
export class MessageService {
  protected http = inject(HttpClient);
  private messages = signal<Message[]>([]);

  addMessage(message: Message) {
    this.messages.update((m) => [...m, message]);
  }

  getMessages() {
    return this.messages.asReadonly();
  }

  deleteMessage(index: number) {
    this.messages.update((m) => m.filter((_, i) => i !== index));
  }

  createMessage(message: Message) {
    return this.http.post<Message>('http://localhost:3000/messages', message).pipe(
      map(result => new Message(result.content, result.id)),
      tap(message => this.addMessage(message)),
    );
  }
}
