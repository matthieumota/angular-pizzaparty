import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PizzaSelected } from './components/pizza-selected/pizza-selected';
import { Counter } from './components/counter/counter';
import { Author } from './components/author/author';
import { User } from './models/user';
import { PizzaService } from './services/pizza-service';
import { delay, map, repeat } from 'rxjs';

@Component({
  imports: [RouterOutlet, FormsModule, NgClass, PizzaSelected, Counter, Author],
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
  protected readonly pizzaService = inject(PizzaService);
  protected readonly pizzas = signal<Pizza[]>([]);
  protected readonly user = signal(new User('Matthieu', 'Mota', '1991-11-23', 'https://i.pravatar.cc/150?u=matthieu'));
  firstname = 'Matthieu';

  ngOnInit() {
    // this.pizzas.set(await this.pizzaService.getPizzas());
    console.log('before');

    this.pizzaService.getPizzas()
      .pipe(
        delay(500),
        map(result => result.filter(p => p.price >= 11)),
        repeat(3),
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
