import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFooterComponent } from './footer.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateFooterComponent', () => {
  let component: TemplateFooterComponent;
  let fixture: ComponentFixture<TemplateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFooterComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
