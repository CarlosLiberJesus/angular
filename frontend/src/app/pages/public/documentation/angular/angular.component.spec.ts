import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageDocumentationAngularComponent } from './angular.component';

describe('PublicPageDocumentationAngularComponent', () => {
  let component: PublicPageDocumentationAngularComponent;
  let fixture: ComponentFixture<PublicPageDocumentationAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageDocumentationAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPageDocumentationAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
