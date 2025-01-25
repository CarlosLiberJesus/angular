import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarMenuComponent } from './side-bar-menu.component';

describe('TemplateSideBarMenuComponent', () => {
  let component: TemplateSideBarMenuComponent;
  let fixture: ComponentFixture<TemplateSideBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
