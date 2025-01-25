import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScrollTopComponent } from './scroll-top.component';

describe('TemplateScrollTopComponent', () => {
  let component: TemplateScrollTopComponent;
  let fixture: ComponentFixture<TemplateScrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateScrollTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
