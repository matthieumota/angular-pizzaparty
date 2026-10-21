import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

const PIZZAS: Array<Pizza> = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  imports: [RouterOutlet, FormsModule, NgClass],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzaparty');
  // protected readonly name = signal<string>('4 fromages');
  // image = '/assets/pizzas/reine.jpg';
  protected readonly pizza = signal<Pizza | undefined>(
    undefined
    // new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg')
  );
  protected readonly pizzas = signal(PIZZAS);
  firstname = 'Matthieu';

  onSelect(pizza: Pizza) {
    console.log(pizza);
    // on change la valeur du signal avec une copie
    this.pizza.set({ ...pizza });
    // on change la valeur du signal avec une référence
    // this.pizza.set(pizza);
  }
}
