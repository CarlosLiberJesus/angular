import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageInstitucionaisComponent } from './institucionais.component';

describe('PublicPageInstitucionaisComponent', () => {
  let component: PublicPageInstitucionaisComponent;
  let fixture: ComponentFixture<PublicPageInstitucionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageInstitucionaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPageInstitucionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
