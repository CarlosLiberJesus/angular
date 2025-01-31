import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageInstitucionaisMissaoComponent } from './missao.component';

describe('PublicPageInstitucionaisMissaoComponent', () => {
  let component: PublicPageInstitucionaisMissaoComponent;
  let fixture: ComponentFixture<PublicPageInstitucionaisMissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicPageInstitucionaisMissaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicPageInstitucionaisMissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
