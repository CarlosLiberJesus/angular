import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarComponent } from './side-bar.component';

describe('TemplateSideBarComponent', () => {
  let component: TemplateSideBarComponent;
  let fixture: ComponentFixture<TemplateSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
