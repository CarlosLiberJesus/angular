import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageLegislacaoComponent } from './legislacao.component';

describe('LegislacaoComponent', () => {
  let component: MixedPageLegislacaoComponent;
  let fixture: ComponentFixture<MixedPageLegislacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageLegislacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedPageLegislacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
