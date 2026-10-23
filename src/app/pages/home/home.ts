import { Component, signal } from '@angular/core';
import { Author } from '../../components/author/author';
import { MessageForm } from '../../components/message-form/message-form';
import { MessageList } from '../../components/message-list/message-list';
import { User } from '../../models/user';

@Component({
  imports: [Author, MessageForm, MessageList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly user = signal(new User('Matthieu', 'Mota', '1991-11-23', 'https://i.pravatar.cc/150?u=matthieu'));
  firstname = 'Matthieu';
}
