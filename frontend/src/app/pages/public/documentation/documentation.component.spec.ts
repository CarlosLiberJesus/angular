import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageDocumentationComponent } from './documentation.component';

describe('PublicPageDocumentationComponent', () => {
  let component: PublicPageDocumentationComponent;
  let fixture: ComponentFixture<PublicPageDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
