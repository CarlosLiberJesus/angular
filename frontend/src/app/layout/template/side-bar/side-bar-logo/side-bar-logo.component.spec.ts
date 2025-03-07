import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarLogoComponent } from './side-bar-logo.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateSideBarLogoComponent', () => {
  let component: TemplateSideBarLogoComponent;
  let fixture: ComponentFixture<TemplateSideBarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarLogoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
