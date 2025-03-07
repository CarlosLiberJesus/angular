import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageSiteMapComponent } from './site-map.component';

describe('PublicPageSiteMapComponent', () => {
  let component: PublicPageSiteMapComponent;
  let fixture: ComponentFixture<PublicPageSiteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageSiteMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageSiteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
