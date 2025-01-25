import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarComponent } from './tool-bar.component';

describe('TemplateToolBarComponent', () => {
  let component: TemplateToolBarComponent;
  let fixture: ComponentFixture<TemplateToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
