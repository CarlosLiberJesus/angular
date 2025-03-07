import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageCidadaosComponent } from './cidadaos.component';

describe('MixedPageCidadaosComponent', () => {
  let component: MixedPageCidadaosComponent;
  let fixture: ComponentFixture<MixedPageCidadaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageCidadaosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPageCidadaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
