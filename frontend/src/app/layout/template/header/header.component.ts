import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateHeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { TemplateHeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-template-header',
  standalone: true,
  imports: [TemplateHeaderNavbarComponent, TemplateHeaderMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent {}
