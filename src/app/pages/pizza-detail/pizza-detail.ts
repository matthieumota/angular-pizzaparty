import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza-service';
import { CurrencyPipe, UpperCasePipe, JsonPipe } from '@angular/common';

@Component({
  imports: [RouterLink, CurrencyPipe, UpperCasePipe, JsonPipe],
  selector: 'app-pizza-detail',
  styleUrl: './pizza-detail.css',
  templateUrl: './pizza-detail.html',
})
export class PizzaDetail implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  observable$ = this.activatedRoute.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this.pizzaService.getPizza(Number(id)))
  );
  pizzaService = inject(PizzaService);
  pizza = signal<Pizza | null>(null);

  ngOnInit(): void {
    console.log(this.pizzaService)
    this.observable$.subscribe(pizza => {
      this.pizza.set(pizza);
    });
  }
}
