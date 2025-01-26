import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TemplateHeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { TemplateHeaderMenuComponent } from './header-menu/header-menu.component';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-header',
  standalone: true,
  imports: [
    TemplateHeaderNavbarComponent,
    TemplateHeaderMenuComponent,
    MetronicIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent implements OnInit {
  menuIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-abstract-14',
    css: ['fs-1'],
  };

  ngOnInit(): void {
    document.body.setAttribute('data-kt-app-header-fixed', 'true');
  }
}
