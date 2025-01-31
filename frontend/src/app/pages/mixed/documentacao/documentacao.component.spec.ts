import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageDocumentacaoComponent } from './documentacao.component';

describe('MixedPageDocumentacaoComponent', () => {
  let component: MixedPageDocumentacaoComponent;
  let fixture: ComponentFixture<MixedPageDocumentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageDocumentacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedPageDocumentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
