import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateContentComponent } from './content.component';

describe('TemplateContentComponent', () => {
  let component: TemplateContentComponent;
  let fixture: ComponentFixture<TemplateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TemplateContentComponent,
        BrowserAnimationsModule, // Add this to enable animations
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { transition: 'fade' }, // Mock the data property as expected by the component
            },
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
