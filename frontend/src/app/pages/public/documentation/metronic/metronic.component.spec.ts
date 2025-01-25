import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageDocumentationMetronicComponent } from './metronic.component';

describe('PublicPageDocumentationMetronicComponent', () => {
  let component: PublicPageDocumentationMetronicComponent;
  let fixture: ComponentFixture<PublicPageDocumentationMetronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageDocumentationMetronicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationMetronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
