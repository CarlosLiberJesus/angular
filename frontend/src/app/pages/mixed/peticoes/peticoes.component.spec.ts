import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPagePeticoesComponent } from './peticoes.component';

describe('MixedPagePeticoesComponent', () => {
  let component: MixedPagePeticoesComponent;
  let fixture: ComponentFixture<MixedPagePeticoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPagePeticoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedPagePeticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
