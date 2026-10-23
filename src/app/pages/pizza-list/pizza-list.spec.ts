import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { PizzaList } from './pizza-list';
import { PizzaService } from '../../services/pizza-service';
import { Pizza } from '../../models/pizza';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
];

describe('PizzaList', () => {
  let component: PizzaList;
  let fixture: ComponentFixture<PizzaList>;
  let element: HTMLElement;

  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [PizzaList],
      providers: [
        provideRouter([]),
        { provide: PizzaService, useValue: { getPizzas: () => of(PIZZAS) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaList);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the pizzas', async () => {
    // Le composant applique un delay(50) sur getPizzas()
    await vi.advanceTimersByTimeAsync(5000);
    fixture.detectChanges();

    const items = element.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Reine');
    expect(items[1].textContent).toContain('4 fromages');
  });
});
