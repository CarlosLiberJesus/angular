import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarAccountingComponent } from './accounting.component';

describe('TemplateToolBarAccountingComponent', () => {
  let component: TemplateToolBarAccountingComponent;
  let fixture: ComponentFixture<TemplateToolBarAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarAccountingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
