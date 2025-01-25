import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderMenuComponent } from './header-menu.component';

describe('TemplateHeaderMenuComponent', () => {
  let component: TemplateHeaderMenuComponent;
  let fixture: ComponentFixture<TemplateHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHeaderMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
