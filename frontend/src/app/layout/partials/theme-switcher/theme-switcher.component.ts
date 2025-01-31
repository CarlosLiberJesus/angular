import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IButton,
  IMenu,
  IMenuClickEvent,
  MetronicButtonComponent,
  MetronicMenuComponent,
} from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, MetronicButtonComponent, MetronicMenuComponent],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  themeIcon: IButton = {
    spinner: {
      style: {
        css: ['me-1', 'text-dark', 'spinner-border', 'h-25px w-25px'],
      },
    },
  };
  themeMenu!: IMenu;
  showMenu = false;
  themeName!: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.themeName = localStorage.getItem('theme_value') ?? 'system';
    this.setTheme();
  }

  translateThemeName(theme: string): string {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme;
  }

  setTheme(): void {
    this.themeIcon = {
      css: [
        'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px',
      ],
      iconFirst: {
        library: 'ki-duotone',
        value:
          this.translateThemeName(this.themeName) === 'dark'
            ? 'ki-moon'
            : 'ki-night-day',
        css: ['fs-1'],
      },
    };

    this.themeMenu = {
      name: 'menu-theme',
      autoReturn: true,
      cssMenuClass: [
        'position-absolute',
        'top-100',
        'end-0',
        'menu',
        'menu-column',
        'menu-rounded',
        'card',
        'menu-title-gray-700',
        'menu-icon-gray-500',
        'menu-active-bg',
        'menu-state-color',
        'fw-semibold',
        'py-4',
        'fs-base',
        'w-150px',
        'z-index-3',
      ],
      items: [
        {
          title: 'Claro',
          cssMenuItemClass: ['px-3 my-0'],
          cssMenuItemLinkClass: [
            'px-3 py-2',
            this.themeName === 'light' ? 'active' : '',
          ],
          iconFirst: {
            library: 'ki-duotone',
            value: 'ki-night-day',
            css: ['fs-2'],
          },
        },
        {
          title: 'Escuro',
          cssMenuItemClass: ['px-3 my-0'],
          cssMenuItemLinkClass: [
            'px-3 py-2',
            this.themeName === 'dark' ? 'active' : '',
          ],
          iconFirst: {
            library: 'ki-duotone',
            value: 'ki-moon',
            css: ['fs-2'],
          },
        },
        {
          title: 'Sistema',
          cssMenuItemClass: ['px-3 my-0'],
          cssMenuItemLinkClass: [
            'px-3 py-2',
            this.themeName === 'system' ? 'active' : '',
          ],
          iconFirst: {
            library: 'ki-duotone',
            value: 'ki-screen',
            css: ['fs-2'],
          },
        },
      ],
    };
  }

  changeTheme(event: IMenuClickEvent): void {
    let theme = 'light';
    if (event.menu === 1) {
      theme = 'dark';
    } else if (event.menu === 2) {
      theme = 'system';
    }
    localStorage.setItem('theme_value', theme);
    if (theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    document.documentElement.setAttribute('data-bs-theme', theme);
    this.showMenu = false;
    this.themeIcon = {
      ...this.themeIcon,
      iconFirst: {
        library: 'ki-duotone',
        value: theme === 'dark' ? 'ki-moon' : 'ki-night-day',
        css: ['fs-1'],
      },
    };
    this.themeMenu = {
      ...this.themeMenu,
      items: this.themeMenu.items.map((item, index) => ({
        ...item,
        cssMenuItemLinkClass: [
          'px-3 py-2',
          index === event.menu ? 'active' : '',
        ],
      })),
    };
    this.cdr.detectChanges();
  }
}
