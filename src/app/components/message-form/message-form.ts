import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message-service';
import { Message } from '../../models/message';
import { delay } from 'rxjs';

@Component({
  selector: 'app-message-form',
  imports: [FormsModule],
  templateUrl: './message-form.html',
  styleUrl: './message-form.css',
})
export class MessageForm {
  protected readonly messageService = inject(MessageService);
  message = signal('');

  add() {
    if (!this.message().trim()) return;

    // this.messageService.addMessage(new Message(this.message));
    // this.message = '';
    this.messageService
      .createMessage(new Message(this.message()))
      .subscribe(() => this.message.set(''));
  }
}
