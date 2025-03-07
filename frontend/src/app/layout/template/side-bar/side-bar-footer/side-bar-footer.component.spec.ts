import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarFooterComponent } from './side-bar-footer.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateSideBarFooterComponent', () => {
  let component: TemplateSideBarFooterComponent;
  let fixture: ComponentFixture<TemplateSideBarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarFooterComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
