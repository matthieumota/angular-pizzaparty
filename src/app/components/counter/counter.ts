import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  value = input(0);
  count = linkedSignal(this.value);

  decrement() {
    this.count.update((c) => c - 1);
  }

  increment() {
    this.count.update((c) => c + 1);
  }
}
