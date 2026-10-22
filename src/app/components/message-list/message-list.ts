import { Component, inject } from '@angular/core';
import { MessageService } from '../../services/message-service';

@Component({
  selector: 'app-message-list',
  imports: [],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
  protected readonly messageService = inject(MessageService);
  protected readonly messages = this.messageService.getMessages();

  delete(index: number) {
    this.messageService.deleteMessage(index);
  }
}
