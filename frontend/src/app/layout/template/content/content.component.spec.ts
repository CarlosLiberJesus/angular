import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContentComponent } from './content.component';

describe('TemplateContentComponent', () => {
  let component: TemplateContentComponent;
  let fixture: ComponentFixture<TemplateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
