import { Component, inject, signal } from '@angular/core';
import { PizzaSelected } from '../../components/pizza-selected/pizza-selected';
import { NgClass } from '@angular/common';
import { Counter } from '../../components/counter/counter';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza-service';
import { delay, map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PizzaSelected, NgClass, Counter, RouterLink],
  selector: 'app-pizza-list',
  styleUrl: './pizza-list.css',
  templateUrl: './pizza-list.html',
})
export class PizzaList {
  // protected readonly name = signal<string>('4 fromages');
  // image = '/assets/pizzas/reine.jpg';
  protected readonly pizza = signal<Pizza | undefined>(
    undefined
    // new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg')
  );
  protected readonly pizzaService = inject(PizzaService);
  protected readonly pizzas = signal<Pizza[]>([]);

  ngOnInit() {
    // this.pizzas.set(await this.pizzaService.getPizzas());
    console.log('before');

    this.pizzaService.getPizzas()
      .pipe(
        delay(50),
        map(result => result.filter(p => p.price >= 11)),
        // repeat(3),
      ).subscribe(result => {
        this.pizzas.update((c) => [...c, ...result])
        console.log('complete')
      });

    console.log('pending');
  }

  onSelect(pizza: Pizza) {
    console.log(pizza);
    // on change la valeur du signal avec une copie
    this.pizza.set({ ...pizza });
    // on change la valeur du signal avec une référence
    // this.pizza.set(pizza);
  }

  updateQuantity(qty: number, pizza: Pizza) {
    // alert(qty);
    // pizza.quantity = qty;
    // Permet de modifier la quantité de la pizza sélectionné
    this.pizza.set({ ...pizza, quantity: qty });
    // Permet de modifier un objet dans un tableau
    this.pizzas.update(pizzas =>
      pizzas.map(p => p.id === pizza.id ? { ...p, quantity: qty } : p)
    );
  }
}
