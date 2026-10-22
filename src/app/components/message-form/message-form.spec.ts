import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MessageForm } from './message-form';

describe('MessageForm', () => {
  let component: MessageForm;
  let fixture: ComponentFixture<MessageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageForm],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
