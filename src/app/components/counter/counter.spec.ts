import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.componentRef.setInput('value', 5);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the value input', () => {
    expect(element.querySelector('span')?.textContent).toContain('5');
  });

  it('should increment on click', async () => {
    const button = element.querySelectorAll('button')[1];
    button.click();
    await fixture.whenStable();

    expect(element.querySelector('span')?.textContent).toContain('6');
  });

  it('should decrement on click', async () => {
    const button = element.querySelectorAll('button')[0];
    button.click();
    await fixture.whenStable();

    expect(element.querySelector('span')?.textContent).toContain('4');
  });
});
