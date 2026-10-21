import { Component, input, linkedSignal } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-pizza-selected',
  styleUrl: './pizza-selected.css',
  templateUrl: './pizza-selected.html',
})
export class PizzaSelected {
  default = input<Pizza | undefined>(undefined);
  pizza = linkedSignal(this.default); // On crée un signal à partir du input
  firstname = 'Matthieu';
}
