import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PublicPageDocumentationComponent } from './documentation.component';

describe('PublicPageDocumentationComponent', () => {
  let component: PublicPageDocumentationComponent;
  let fixture: ComponentFixture<PublicPageDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PublicPageDocumentationComponent,
        BrowserAnimationsModule, // Add this to enable animations
        HttpClientTestingModule, // Add this to provide HttpClient
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
