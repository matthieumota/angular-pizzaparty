import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Layout } from './components/layout/layout';
import { Menu } from './components/menu/menu';
import { NavLink } from './components/nav-link/nav-link';

@Component({
  imports: [RouterOutlet, FormsModule, RouterLinkWithHref, Layout, Menu, NavLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzaparty');
}
