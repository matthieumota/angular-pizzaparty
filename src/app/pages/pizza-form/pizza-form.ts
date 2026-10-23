import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza-service';
import { filter, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-pizza-form',
  styleUrl: './pizza-form.css',
  templateUrl: './pizza-form.html',
})
export class PizzaForm {
  activatedRoute = inject(ActivatedRoute);
  pizzaService = inject(PizzaService);
  pizza = signal<Pizza | null>(null);
  editMode = computed(() => !!this.pizza());

  // pizza = toSignal(
  //   this.activatedRoute.paramMap.pipe(
  //     filter(params => params.has('id')),
  //     switchMap(params => this.pizzaService.getPizza(String(params.get('id'))))
  //   )
  // );

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.pizzaService.getPizza(String(params.get('id'))))
    ).subscribe(pizza => {
      this.pizza.set(pizza)
    });
  }

  pizzaDraft = linkedSignal<PizzaDraft>(() => ({
    name: this.pizza()?.name ?? '',
    price: this.pizza()?.price.toString() ?? '',
    image: this.pizza()?.image ?? '/assets/pizzas/reine.jpg',
  }));

  router = inject(Router);

  save(element: NgForm) {
    console.log(element.value, element.valid)
    console.log(element.controls['price'].value * 1.2)
    console.log(this.pizzaDraft());

    if (this.editMode()) {
      this.pizzaService.updatePizza(this.pizza()!.id, this.pizzaDraft())
        .subscribe(pizza => this.router.navigate(['/pizzas', pizza.id]))
    } else {
      this.pizzaService.createPizza(this.pizzaDraft())
        .subscribe(pizza => this.router.navigate(['/pizzas', pizza.id]))
    }
  }
}

export type PizzaDraft = Omit<Pizza, 'id' | 'price'> & {
  price: string;
}
