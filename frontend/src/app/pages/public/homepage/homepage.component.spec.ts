import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageHomepageComponent } from './homepage.component';

describe('PublicPageHomepageComponent', () => {
  let component: PublicPageHomepageComponent;
  let fixture: ComponentFixture<PublicPageHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageHomepageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
