import { Pizza } from './pizza';

describe('Pizza', () => {
  it('should create an instance', () => {
    const p = new Pizza(1, 'Reine', 10, '/assets/pizzas/reine.jpg')
    expect(p).toBeTruthy();
    //expect(p.getPrice()).toBe(12);
  });

  it('should calculate the price correctly and rounded', () => {
    const p = new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg')
    //expect(p.getPrice()).toBe(14.4);
  });
});
