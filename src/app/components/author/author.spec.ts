import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Author } from './author';
import { User } from '../../models/user';

describe('Author', () => {
  let component: Author;
  let fixture: ComponentFixture<Author>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Author],
    }).compileComponents();

    fixture = TestBed.createComponent(Author);
    fixture.componentRef.setInput('user', new User('John', 'Doe', '2000-01-01'));
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
