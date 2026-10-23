import { Component, computed, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  pizzaDraft = signal<PizzaDraft>({
    name: '',
    price: '',
  });

  save(element: NgForm) {
    console.log(element.value, element.valid)
    console.log(element.controls['price'].value * 1.2)
    console.log(this.pizzaDraft());
  }
}

export type PizzaDraft = Omit<Pizza, 'id' | 'price'> & {
  price: string;
}
