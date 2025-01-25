import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarExtendedComponent } from './extended.component';

describe('TemplateToolBarExtendedComponent', () => {
  let component: TemplateToolBarExtendedComponent;
  let fixture: ComponentFixture<TemplateToolBarExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarExtendedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
