import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarReportsComponent } from './reports.component';

describe('TemplateToolBarReportsComponent', () => {
  let component: TemplateToolBarReportsComponent;
  let fixture: ComponentFixture<TemplateToolBarReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
