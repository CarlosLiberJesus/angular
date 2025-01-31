import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageInstitucionaisContactosComponent } from './contactos.component';

describe('PublicPageInstitucionaisContactosComponent', () => {
  let component: PublicPageInstitucionaisContactosComponent;
  let fixture: ComponentFixture<PublicPageInstitucionaisContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageInstitucionaisContactosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PublicPageInstitucionaisContactosComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
