import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TitleToolbarService } from '../../../../services/title-toolbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-tool-classic',
  imports: [CommonModule],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateToolBarClassicComponent {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  tools!: TemplateRef<HTMLElement> | null;
  animationClass: string = '';

  constructor(
    private titleToolbarService: TitleToolbarService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    let started = false;
    this.titleToolbarService.tools$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tools: TemplateRef<HTMLElement> | null) => {
        if (!started && !tools) {
          started = true;
          return;
        }
        this.animateOut();
        if (tools) {
          this.tools = tools;
          this.animationClass =
            'animate__animated animate__backInDown animate__faster';
          this.cdr.detectChanges();
        } else {
          setTimeout(() => {
            this.tools = null;
            this.cdr.detectChanges();
          }, 400);
        }
      });
  }

  private animateOut() {
    this.animationClass =
      'animate__animated animate__backOutRight animate__faster';
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 1);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
