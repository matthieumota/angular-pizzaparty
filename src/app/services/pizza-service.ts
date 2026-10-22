import { inject, Service } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';

const PIZZAS: Array<Pizza> = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Service()
export class PizzaService {
  protected http = inject(HttpClient);

  getPizzasOld(): Promise<Pizza[]> {
    // return Promise.resolve(PIZZAS);
    //return new Promise(resolve => {
    //  setTimeout(() => resolve(PIZZAS), 2000);
    //});
    // return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())

    return lastValueFrom(this.http.get<Pizza[]>('http://localhost:3000/pizzas'));
  }

  getPizzas() {
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }

  getPizzasExpensive() {
    return this.getPizzas().pipe(
      map(result => result.filter(p => p.price >= 11)),
    );
  }
}
