import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageDocumentationLaravelComponent } from './laravel.component';

describe('PublicPageDocumentationLaravelComponent', () => {
  let component: PublicPageDocumentationLaravelComponent;
  let fixture: ComponentFixture<PublicPageDocumentationLaravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageDocumentationLaravelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationLaravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
