import { ChangeDetectionStrategy, Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IButton,
  MetronicButtonComponent,
} from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-side-bar-logo',
  imports: [MetronicButtonComponent, RouterModule],
  templateUrl: './side-bar-logo.component.html',
  styleUrl: './side-bar-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarLogoComponent {
  toggleButton: IButton = {
    css: [
      'btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px',
    ],
    iconFirst: {
      library: 'ki-duotone',
      value: 'ki-double-left',
      css: ['fs-2', 'rotate-180'],
      cssContainer: ['rotate'],
    },
  };

  isMinimized: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
    const body = document.body;
    if (this.isMinimized) {
      this.renderer.setAttribute(body, 'data-kt-app-sidebar-minimize', 'on');
    } else {
      this.renderer.removeAttribute(body, 'data-kt-app-sidebar-minimize');
    }
  }
}
