import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSideBarComponent } from './side-bar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TemplateSideBarComponent', () => {
  let component: TemplateSideBarComponent;
  let fixture: ComponentFixture<TemplateSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSideBarComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Mock any route parameters if needed
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
