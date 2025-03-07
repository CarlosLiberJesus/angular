import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageDocumentationMetronicComponent } from './metronic.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PublicPageDocumentationMetronicComponent', () => {
  let component: PublicPageDocumentationMetronicComponent;
  let fixture: ComponentFixture<PublicPageDocumentationMetronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageDocumentationMetronicComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationMetronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
