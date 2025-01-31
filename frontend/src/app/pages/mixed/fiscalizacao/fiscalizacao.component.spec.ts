import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageFiscalizacaoComponent } from './fiscalizacao.component';

describe('FiscalizacaoComponent', () => {
  let component: MixedPageFiscalizacaoComponent;
  let fixture: ComponentFixture<MixedPageFiscalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageFiscalizacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPageFiscalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
