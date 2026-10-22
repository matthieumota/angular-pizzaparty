import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {
  user = input.required<User>();
  author = linkedSignal(this.user); // Copie modifiable du input
  showAvatar = signal(true);

  years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);

  birthYear = computed(() => {
    return Number(this.author().birthday.split('-')[0]);
  });

  age = computed(() => {
    console.log('COMPUTE AGE');
    const today = new Date();
    const birthday = new Date(this.author().birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  });

  isAdult = computed(() => {
    console.log('COMPUTE ADULT');
    return this.age() >= 18;
  });

  onYearChange(year: string) {
    const [, month, day] = this.author().birthday.split('-');
    this.author.update((a) => ({ ...a, birthday: `${year}-${month}-${day}` }));
  }
}
