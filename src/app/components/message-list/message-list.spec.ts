import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MessageList } from './message-list';

describe('MessageList', () => {
  let component: MessageList;
  let fixture: ComponentFixture<MessageList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageList],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
