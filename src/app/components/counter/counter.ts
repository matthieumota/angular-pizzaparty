import { Component, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  value = input(0);
  changed = output<number>();
  valueChange = output<number>();
  id = input();
  // count = linkedSignal(this.value);
  count = linkedSignal(() => this.id() ? this.value() : this.value());

  decrement() {
    this.count.update((c) => c - 1);
    this.changed.emit(this.count());
    this.valueChange.emit(this.count());
  }

  increment() {
    this.count.update((c) => c + 1);
    this.changed.emit(this.count());
    this.valueChange.emit(this.count());
  }
}
