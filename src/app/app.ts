import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzaparty');
  // protected readonly name = signal<string>('4 fromages');
  // image = '/assets/pizzas/reine.jpg';
  protected readonly pizza = signal<Pizza>(
    new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg')
  );
  firstname = 'Matthieu';
}
