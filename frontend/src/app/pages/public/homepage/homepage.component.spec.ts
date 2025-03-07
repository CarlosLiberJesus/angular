import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PublicPageHomepageComponent } from './homepage.component';

describe('PublicPageHomepageComponent', () => {
  let component: PublicPageHomepageComponent;
  let fixture: ComponentFixture<PublicPageHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PublicPageHomepageComponent,
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

    fixture = TestBed.createComponent(PublicPageHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
