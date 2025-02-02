import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routeTransition } from '../../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransition],
})
export class TemplateContentComponent {
  hideMobileAlert = false;

  constructor(
    protected route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  onAnimationEvent(event: any) {
    if (event.phaseName === 'start') {
      this.renderer.setAttribute(
        document.body,
        'data-kt-app-footer-fixed',
        'true'
      );
    } else if (event.phaseName === 'done') {
      this.renderer.removeAttribute(document.body, 'data-kt-app-footer-fixed');
    }
  }

  closeAlert(): void {
    this.hideMobileAlert = true;
  }
}
