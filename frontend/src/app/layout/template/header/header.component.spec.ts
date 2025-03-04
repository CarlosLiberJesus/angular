import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderComponent } from './header.component';

describe('TemplateHeaderComponent', () => {
  let component: TemplateHeaderComponent;
  let fixture: ComponentFixture<TemplateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
