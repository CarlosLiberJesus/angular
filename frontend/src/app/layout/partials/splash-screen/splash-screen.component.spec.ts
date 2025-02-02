import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSplashScreenComponent } from './splash-screen.component';

describe('TemplateSplashScreenComponent', () => {
  let component: TemplateSplashScreenComponent;
  let fixture: ComponentFixture<TemplateSplashScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSplashScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
