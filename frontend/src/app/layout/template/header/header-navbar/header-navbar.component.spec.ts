import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeaderNavbarComponent } from './header-navbar.component';

describe('HeaderNavbarComponent', () => {
  let component: TemplateHeaderNavbarComponent;
  let fixture: ComponentFixture<TemplateHeaderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHeaderNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateHeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
