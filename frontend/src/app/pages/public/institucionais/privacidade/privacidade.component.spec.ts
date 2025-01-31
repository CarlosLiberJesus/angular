import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageInstitucionaisPrivacidadeComponent } from './privacidade.component';

describe('PublicPageInstitucionaisPrivacidadeComponent', () => {
  let component: PublicPageInstitucionaisPrivacidadeComponent;
  let fixture: ComponentFixture<PublicPageInstitucionaisPrivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageInstitucionaisPrivacidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicPageInstitucionaisPrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
