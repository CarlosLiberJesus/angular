import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../../../partials/theme-switcher/theme-switcher.component';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-header-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, MetronicIconComponent],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderNavbarComponent {
  mobileMenuIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-element-4',
    css: ['fs-2qx'],
  };
}
