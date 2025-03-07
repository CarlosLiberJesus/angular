import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateMessageAlertComponent } from './message-alert.component';
import { MessageAlertService } from '../../../services/message-alert.service';
import { of } from 'rxjs';

describe('TemplateMessageAlertComponent', () => {
  let component: TemplateMessageAlertComponent;
  let fixture: ComponentFixture<TemplateMessageAlertComponent>;
  let _messageAlertService: jasmine.SpyObj<MessageAlertService>;

  beforeEach(async () => {
    const messageAlertServiceSpy = jasmine.createSpyObj('MessageAlertService', [
      'getMessageAlert',
    ]);
    messageAlertServiceSpy.getMessageAlert.and.returnValue(of(null)); // Mock the service to return a value

    await TestBed.configureTestingModule({
      imports: [TemplateMessageAlertComponent], // Move to imports
      providers: [
        { provide: MessageAlertService, useValue: messageAlertServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateMessageAlertComponent);
    component = fixture.componentInstance;
    _messageAlertService = TestBed.inject(
      MessageAlertService
    ) as jasmine.SpyObj<MessageAlertService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
