import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { PizzaList } from './pages/pizza-list/pizza-list';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'pizzas',
    loadComponent: () => import('./pages/pizza-list/pizza-list').then(m => m.PizzaList)
  },
  {
    path: 'pizzas/:id',
    loadComponent: () => import('./pages/pizza-detail/pizza-detail').then(m => m.PizzaDetail)
  }
];
