import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarFooterComponent } from './side-bar-footer.component';

describe('TemplateSideBarFooterComponent', () => {
  let component: TemplateSideBarFooterComponent;
  let fixture: ComponentFixture<TemplateSideBarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
