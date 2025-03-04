import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFooterComponent } from './footer.component';

describe('TemplateFooterComponent', () => {
  let component: TemplateFooterComponent;
  let fixture: ComponentFixture<TemplateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
