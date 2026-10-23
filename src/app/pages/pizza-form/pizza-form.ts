import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza-service';
import { filter, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
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
  //     switchMap(params => this.pizzaService.getPizza(Number(params.get('id'))))
  //   )
  // );

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.pizzaService.getPizza(Number(params.get('id'))))
    ).subscribe(pizza => {
      this.pizza.set(pizza)
    });
  }
}
