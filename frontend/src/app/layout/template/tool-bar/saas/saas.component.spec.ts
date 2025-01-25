import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarSaasComponent } from './saas.component';

describe('TemplateToolBarSaasComponent', () => {
  let component: TemplateToolBarSaasComponent;
  let fixture: ComponentFixture<TemplateToolBarSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarSaasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
