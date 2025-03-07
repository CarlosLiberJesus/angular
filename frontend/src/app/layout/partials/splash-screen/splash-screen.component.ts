import { SplashScreenService } from './../../../services/splash-screen.service';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-template-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
})
export class TemplateSplashScreenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('splashScreen', { read: ViewContainerRef })
  splashScreenContainer!: ViewContainerRef;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private splashScreenService: SplashScreenService) {}

  ngAfterViewInit(): void {
    let booted = false;
    this.splashScreenService
      .getSplashScreen()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        const element = this.splashScreenContainer.element.nativeElement;
        if (value) {
          if (!booted) {
            booted = true;
          }
          setTimeout(() => {
            element.classList = '';
            //element.classList.add('animate__animated');
            //element.classList.add('animate__zoomIn');
            //element.classList.add('animate__fast');
          }, 1);
        } else {
          setTimeout(() => {
            element.classList.add('animate__animated');
            element.classList.add('animate__zoomOut');
            element.classList.add('animate__normal');
          }, 400);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
