import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pizza-list',
  styleUrl: './pizza-list.css',
  templateUrl: './pizza-list.html',
})
export class PizzaList {
  tableau = signal<number[]>([]);

  constructor() {
    console.log('PizzaList constructor');
  }

  ngOnInit() {
    // this.tableau.set([1, 2, 3, 4, 5]);
  }

  ngOnDestroy() {
    console.log('PizzaList ngOnDestroy');
  }
}
