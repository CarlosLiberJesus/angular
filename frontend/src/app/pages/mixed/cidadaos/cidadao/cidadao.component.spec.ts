import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageCidadaoComponent } from './cidadao.component';

describe('MixedPageCidadaoComponent', () => {
  let component: MixedPageCidadaoComponent;
  let fixture: ComponentFixture<MixedPageCidadaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageCidadaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPageCidadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
