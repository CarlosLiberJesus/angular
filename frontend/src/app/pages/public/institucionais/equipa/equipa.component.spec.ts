import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageInstitucionaisEquipaComponent } from './equipa.component';

describe('EquipaComponent', () => {
  let component: PublicPageInstitucionaisEquipaComponent;
  let fixture: ComponentFixture<PublicPageInstitucionaisEquipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageInstitucionaisEquipaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageInstitucionaisEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
