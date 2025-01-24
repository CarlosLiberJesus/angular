import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronicComponent } from './metronic.component';

describe('MetronicComponent', () => {
  let component: MetronicComponent;
  let fixture: ComponentFixture<MetronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetronicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
