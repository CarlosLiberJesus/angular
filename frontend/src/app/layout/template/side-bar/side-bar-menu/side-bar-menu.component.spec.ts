import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarMenuComponent } from './side-bar-menu.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateSideBarMenuComponent', () => {
  let component: TemplateSideBarMenuComponent;
  let fixture: ComponentFixture<TemplateSideBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarMenuComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
