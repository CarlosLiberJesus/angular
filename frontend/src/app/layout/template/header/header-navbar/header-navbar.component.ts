import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../../../partials/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-template-header-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderNavbarComponent {}
