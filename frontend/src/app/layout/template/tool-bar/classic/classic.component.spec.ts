import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateToolBarClassicComponent } from './classic.component';

describe('TemplateToolBarClassicComponent', () => {
  let component: TemplateToolBarClassicComponent;
  let fixture: ComponentFixture<TemplateToolBarClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateToolBarClassicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateToolBarClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
