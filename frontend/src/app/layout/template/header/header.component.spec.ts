import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateHeaderComponent', () => {
  let component: TemplateHeaderComponent;
  let fixture: ComponentFixture<TemplateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
