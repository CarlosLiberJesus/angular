import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { TemplateHeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { TemplateHeaderMenuComponent } from './header-menu/header-menu.component';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-header',
  standalone: true,
  imports: [
    RouterModule,
    TemplateHeaderNavbarComponent,
    TemplateHeaderMenuComponent,
    MetronicIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent implements OnInit {
  @Output() openMobileMenu = new EventEmitter<void>();
  menuIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-abstract-14',
    css: ['fs-1'],
  };

  ngOnInit(): void {
    document.body.setAttribute('data-kt-app-header-fixed', 'true');
  }

  toggleMobileMenu(): void {
    this.openMobileMenu.emit();
  }

  getImagePath(): string {
    const path = 'img/logos/';
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
      return path + 'ico-dark-white.png';
    }
    return path + 'ico-white.png';
  }
}
