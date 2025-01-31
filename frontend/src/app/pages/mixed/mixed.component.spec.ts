import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageMixedComponent } from './mixed.component';

describe('MixedPageMixedComponent', () => {
  let component: MixedPageMixedComponent;
  let fixture: ComponentFixture<MixedPageMixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPageMixedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPageMixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
