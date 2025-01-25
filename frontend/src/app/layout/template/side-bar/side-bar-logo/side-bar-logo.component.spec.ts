import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarLogoComponent } from './side-bar-logo.component';

describe('TemplateSideBarLogoComponent', () => {
  let component: TemplateSideBarLogoComponent;
  let fixture: ComponentFixture<TemplateSideBarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
